/**
 * 常用公共方法
 */

import type { Collection } from '../public'
import { isObject, isFunction, isPlainObject, cloneDeep, isEmpty } from 'lodash-es'

/**
 * @returns {number} output value
 * @param str
 */
export function byteLength(str: string) {
	// returns the byte length of an utf8 string
	let s = str.length
	for (let i = str.length - 1; i >= 0; i--) {
		const code = str.charCodeAt(i)
		if (code > 0x7f && code <= 0x7ff) {
			s++
		} else if (code > 0x7ff && code <= 0xffff) {
			s += 2
		}
		if (code >= 0xdc00 && code <= 0xdfff) {
			i--
		}
	}
	return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual: number[]) {
	const newArray:number[] = []
	for (let i = 0; i < actual.length; i++) {
		if (actual[i]) {
			newArray.push(actual[i])
		}
	}
	return newArray
}

/**
 * url参数转对象
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url: string) {
	const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
	if (!search) {
		return {}
	}
	const obj: Record<string, any> = {}
	const searchArr = search.split('&')
	searchArr.forEach((v) => {
		const index = v.indexOf('=')
		if (index !== -1) {
			const name = v.substring(0, index)
			obj[name] = v.substring(index + 1, v.length)
		}
	})
	return obj
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val: string) {
	const div = document.createElement('div')
	div.innerHTML = val
	return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target: Record<string, any>, source: any[]) {
	if (typeof target !== 'object') {
		target = {}
	}
	if (Array.isArray(source)) {
		return source.slice()
	}
	Object.keys(source).forEach((property) => {
		const sourceProperty = source[property]
		if (typeof sourceProperty === 'object') {
			target[property] = objectMerge(target[property], sourceProperty)
		} else {
			target[property] = sourceProperty
		}
	})
	return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element: Element, className: string) {
	if (!element || !className) {
		return
	}
	let classString = element.className
	const nameIndex = classString.indexOf(className)
	if (nameIndex === -1) {
		classString += '' + className
	} else {
		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
	}
	element.className = classString
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr: any[]) {
	return Array.from(new Set(arr))
}

/**
 * 判断变量类型
 * @param v
 * @returns {string}
 */
export function myTypeof(v: any) {
	let str = Object.prototype.toString.call(v)
	return str.replace(/\[object |]/g, '')
}

/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
export function isValidVal(val: any) {
	return val !== undefined && val !== null && val !== ''
}

/**
 * 去掉对象属性前后空格
 */
export function trimObj(obj: Record<string, any>) {
	let p = myTypeof(obj)
	if (p === 'Object') {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let o = myTypeof(obj[key])
				if (o === 'String') {
					obj[key] = obj[key].trim()
				} else if (o === 'Object' || o === 'Array') {
					trimObj(obj[key])
				}
			}
		}
	} else if (p === 'Array') {
		for (let i = 0, l = obj.length; i < l; i++) {
			let t = myTypeof(obj[i])
			if (t === 'String') {
				obj[i] = obj[i].trim()
			} else if (t === 'Array' || t === 'Object') {
				trimObj(obj[i])
			}
		}
	}
	return obj
}

/**
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param {Array/Object} group - 集合，被查找的集合，必填
 * @param {Function/String/Number/Boolean} condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} childKey - 集合子元素的key，默认值 children
 * @param {Array} path - 递归用参数，逻辑内部参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export function findPath({
	group,
	condition,
	pathKey,
	childKey = 'children',
	path = []
}: {
	group: Collection
	condition: (item: any) => boolean
	pathKey?: any
	childKey?: any
	path?: string[]
}): Array<string | number> {
	if (group && isObject(group)) {
		if (isFunction(condition)) {
			if (isPlainObject(group)) {
				let item = group
				let temp = cloneDeep(path)
				if (condition(item)) {
					if (pathKey && item[pathKey]) {
						temp.push(item[pathKey])
					}
					return temp
				} else if (item[childKey] && !isEmpty(item[childKey])) {
					if (pathKey && item[pathKey]) {
						temp.push(item[pathKey])
					}
					let rr = findPath({
						group: item[childKey],
						condition: condition,
						pathKey: pathKey,
						childKey: childKey,
						path: temp
					})
					if (!isEmpty(rr)) {
						return rr
					}
				}
			} else if (Array.isArray(group)) {
				for (let item of group) {
					let temp = cloneDeep(path)
					if (condition(item)) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(String(group.indexOf(item)))
						}
						return temp
					} else if (item[childKey] && item[childKey].length > 0) {
						if (pathKey && item[pathKey]) {
							temp.push(item[pathKey])
						} else {
							temp.push(String(group.indexOf(item)))
						}
						let rr = findPath({
							group: item[childKey],
							condition: condition,
							pathKey: pathKey,
							childKey: childKey,
							path: temp
						})
						if (!isEmpty(rr)) {
							return rr
						}
					}
				}
			}
		} else if (Array.isArray(group)) {
			//条件为常量，集合为数组，这种情况只会有一种业务场景：在一维数组中查找某个常量在数组中第一次出现的index
			for (let item of group) {
				let temp = cloneDeep(path)
				if (item === condition) {
					temp.push(String(group.indexOf(item)))
					return temp
				}
			}
		}
	}
	return []
}

/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {Array|Object} group 被查找的集合
 * @param {Function|String|Number|Boolean} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
export function findCollection(group: Collection, condition: (e: any) => boolean, getPath = false) {
	if (!group || !condition) {
		return false
	}
	let PATH
	let target: string | Collection = 'notFoundC'
	let deepSearch: Function = function (group: Collection, condition: (e: any) => boolean) {
		if (Array.isArray(group)) {
			if (myTypeof(condition) === 'Function' && condition(group)) {
				target = group
				return []
			}
			for (let e of group) {
				if (target !== 'notFoundC') {
					break
				}
				if ((myTypeof(condition) === 'Function' && condition(e)) || e === condition) {
					target = e
					return [group.indexOf(e)]
				} else if (myTypeof(e) === 'Array' || myTypeof(e) === 'Object') {
					let r = deepSearch(e, condition)
					if (r !== undefined) {
						return [group.indexOf(e), ...r]
					}
				}
			}
		} else if (myTypeof(group) === 'Object') {
			if (myTypeof(condition) === 'Function' && condition(group)) {
				target = group
				return []
			}
			for (let key in group) {
				if (target !== 'notFoundC') {
					break
				}
				if (group.hasOwnProperty(key)) {
					if ((myTypeof(condition) === 'Function' && condition(key)) || group[key] === condition) {
						target = group[key]
						return [key]
					} else if (myTypeof(group[key]) === 'Object' || myTypeof(group[key]) === 'Array') {
						let r = deepSearch(group[key], condition)
						if (r !== undefined) {
							return [key, ...r]
						}
					}
				}
			}
		}
	}
	PATH = deepSearch(group, condition)
	if (getPath) {
		return PATH || false
	}
	return target === 'notFoundC' ? false : target
}

/**
 * 描述：数值类型格式化
 * @returns
 * @param str 待转换的字符串，
 * @param dftVal 如果str为空或者parseFloat解析结果为NaN时 返回的默认值 ，不传默认返回0
 * @param num 保留几位小数 不传默认保留2位
 * @param actNum 结果需要乘以的数字
 * @param endStr 结尾需要拼接的字符串
 */
export function parseFloatFormat(
	str: string | number,
	dftVal: string | number,
	num: number,
	actNum: number,
	endStr: string
) {
	dftVal = dftVal || 0
	num = num || 2
	let result = dftVal
	if (str || str == 0) {
		result = parseFloat(String(str)) // 使用十进制进行转换
		if (!isNaN(result)) {
			if (!isNaN(actNum)) {
				result = (result * actNum).toFixed(num)
			} else {
				result = result.toFixed(num)
			}
			if (endStr && endStr.length > 0) {
				result = result + endStr
			}
		} else {
			result = dftVal
		}
	}
	return result
}

/**
 * 图片拼接
 */
export function imageSplicing(path: string) {
	if (path && path.indexOf('http') < 0) {
		return window?._global?.serverImg + path || path
	} else {
		return path || ''
	}
}

import { isValidVal, myTypeof } from '../../../methods'
import { cloneDeep, findIndex } from 'lodash-es'
import $request from '../../../methods/request'
import useState from './useState'
import moment from 'moment/moment'

const { formDataT, tempKeys, dataGroup, watchGroup } = useState()

/**
 * 监听tempKeys项的值，然后赋值给dataGroup
 * @param a 改变的值
 * @param root form节点
 */
const watchTempKeys = (a: Record<string, any>, root: Record<string, any>) => {
	let d = dataGroup.value
	let t = tempKeys.value
	switch (root.type) {
		case 'selectInput':
			if (a) {
				if (a.beforeKey) {
					delete d[a.beforeKey]
				}
				if (a.key) {
					if (root.selectKey) {
						d[root.selectKey] = a.key
						d[root.key] = a.val
					} else {
						d[a.key] = a.val
						d[root.key] = a.key + ':' + a.val
					}
				} else {
					d[root.key] = null
				}
			} else {
				d[root.key] = null
			}
			break
		case 'bdMap':
			if (a) {
				d[root.key] = a.lng
				d[root.key2] = a.lat
				if (root.key3) {
					d[root.key3] = a.name
				}
			} else {
				d[root.key] = null
				d[root.key2] = null
				if (root.key3) {
					d[root.key3] = null
				}
			}
			break
		case 'input':
		case 'inputNumber':
		case 'switch':
		case 'slider':
		case 'rate':
		case 'textarea':
			if (a || a === 0) {
				d[root.key] = a
			} else {
				if (root.type === 'inputNumber' || root.type === 'slider' || root.type === 'rate') {
					d[root.key] = undefined
				} else if (root.type === 'switch') {
					d[root.key] = false
				} else {
					d[root.key] = null
				}
			}
			break
		case 'select':
		case 'radio':
		case 'checkbox':
			if (root.booleanVal && !root.multiple) {
				d[root.key] = isValidVal(a) ? Boolean(a) : null
			} else if (root.multiple || root.type === 'checkbox') {
				d[root.key] = Object.assign([], a)
			} else {
				d[root.key] = a
			}
			/*需要收集额外字段*/
			if (root.collectLabel) {
				let targetOption: any[] | Record<string, any>
				if (root.multiple || root.type === 'checkbox') {
					//值是数组
					targetOption = root.options.filter((e: Record<string, any>) => a && a.indexOf(e.val) > -1)
				} else {
					targetOption = root.options.find((e: Record<string, any>) => e.val === a)
				}
				const setCollectChange = (it: Record<string, any>) => {
					if (it.key && it.valKey) {
						const collectTemp = formDataT.value.find((e) => e.key === it.key)
						let td: any = null
						if (Array.isArray(targetOption)) {
							td = targetOption.map((e) => e[it.valKey])
							d[it.key] = td
							if (collectTemp && collectTemp.tempKey) {
								t[collectTemp.tempKey] = td
							}
						} else {
							if (targetOption && isValidVal(targetOption[it.valKey])) {
								td = targetOption[it.valKey]
							}
							d[it.key] = td
							if (collectTemp && collectTemp.tempKey) {
								t[collectTemp.tempKey] = td
							}
						}
					}
				}
				if (myTypeof(root.collectLabel) === 'Object') {
					setCollectChange(root.collectLabel)
				} else if (Array.isArray(root.collectLabel)) {
					for (let l of root.collectLabel) {
						setCollectChange(l)
					}
				}
			}
			break
		case 'date':
		case 'time':
			let tp = root.dateType || 'date'
			const fm: Record<string, any> = {
				year: 'YYYY',
				month: 'MM',
				date: 'YYYY-MM-DD',
				time: 'HH:mm:ss',
				datetime: 'YYYY-MM-DD HH:mm:ss',
				daterange: 'YYYY-MM-DD',
				monthrange: 'YYYY-MM',
				datetimerange: 'YYYY-MM-DD HH:mm:ss'
			}
			if (
				tp === 'daterange' ||
				tp === 'datetimerange' ||
				tp === 'monthrange' ||
				(root.type === 'time' && root.isRange)
			) {
				if (a && a[0] && a[1]) {
					if (root.type === 'time' && root.isRange) {
						d[root.key] = moment(a[0]).format(root.format || fm[root.type])
						d[root.key2] = moment(a[1]).format(root.format || fm[root.type])
					} else {
						d[root.key] = moment(a[0]).format(root.format || fm[tp])
						d[root.key2] = moment(a[1]).format(root.format || fm[tp])
					}
					if (tp === 'daterange' && root.addTime) {
						d[root.key] += ' 00:00:00'
						d[root.key2] += ' 23:59:59'
					}
				} else {
					d[root.key] = null
					d[root.key2] = null
				}
			} else {
				if (a) {
					if (root.type === 'time') {
						d[root.key] = moment(a).format(root.format || fm[root.type])
					} else {
						d[root.key] = moment(a).format(root.format || fm[tp])
					}
					if (tp === 'date' && root.addTime) {
						d[root.key] += ' 00:00:00'
					}
				} else {
					d[root.key] = null
				}
			}
			break
	}
}

/**
 * 初始化表单
 * @param formData
 */
export default function (formData: any[] = []) {
  for (let f of watchGroup.value) {//取消watch监听
    f()
  }
  tempKeys.value = {}
  watchGroup.value = []
  dataGroup.value = {}
	formDataT.value = cloneDeep(formData)
	/*初始化表单项*/
	const initDataGroup = () => {
		for (let root of formDataT.value) {
			if (root.key) {
				if (root.type === 'checkbox' || ((root.type === 'select' || root.type === 'tableSelect') && root.multiple)) {
					dataGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : []
				} else if (root.type === 'editor') {
					dataGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : ''
				} else if (root.type === 'inputNumber' || root.type === 'slider') {
					dataGroup.value[root.key] =
						root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : undefined
				} else if (root.type === 'switch') {
					dataGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : false
				} else {
					dataGroup.value[root.key] = root.defaultVal !== undefined && root.show === undefined ? root.defaultVal : null
					if (root.key2) {
						dataGroup.value[root.key2] =
							root.defaultVal2 !== undefined && root.show === undefined ? root.defaultVal2 : null
					}
				}
			}
		}
	}

	/*初始化表单项tempKeys值*/
	const initItems = () => {
		for (let root of formDataT.value) {
			switch (root.type) {
				case 'selectInput':
					const tempKeyF = 'selectInput' + Math.floor(Math.random() * 100000000)
					root.tempKey = tempKeyF
					tempKeys.value[tempKeyF] = {
						key: root.defaultKey || null,
						val: root.defaultVal || null
					}
					watchGroup.value.push(
						watch(
							() => tempKeys.value[tempKeyF],
							(after) => {
								watchTempKeys(after, root)
							},
							{ immediate: true }
						)
					)
					break
				case 'bdMap':
					const tempKeyE = 'inputMap' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyE
						tempKeys.value[tempKeyE] =
							root.defaultVal !== undefined && root.defaultVal2 !== undefined
								? {
										lng: root.defaultVal,
										lat: root.defaultVal2,
										name: root.defaultVal3 || ''
								  }
								: {
										lng: null,
										lat: null,
										name: null
								  }
						watchGroup.value.push(
							watch(
								() => tempKeys.value[tempKeyE],
								(after) => {
									watchTempKeys(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
				case 'input':
				case 'inputNumber':
				case 'switch':
				case 'slider':
				case 'rate':
				case 'textarea':
					const tempKeyD = 'inputT' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyD
						if (root.type === 'inputNumber' || root.type === 'slider' || root.type === 'rate') {
							tempKeys.value[tempKeyD] = root.defaultVal !== undefined ? root.defaultVal : undefined
						} else if (root.type === 'switch') {
							tempKeys.value[tempKeyD] = root.defaultVal !== undefined ? root.defaultVal : false
						} else {
							tempKeys.value[tempKeyD] = root.defaultVal !== undefined ? root.defaultVal : null
						}
						watchGroup.value.push(
							watch(
								() => tempKeys.value[tempKeyD],
								(after) => {
									watchTempKeys(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
				case 'select':
				case 'radio':
				case 'checkbox':
					if (!root.options) {
						root.options = []
					}
					if (root.asyncOption) {
						// 远程查询数据
						if (root.changeOption) {
							// 需要根据其它选项的值作为条件来查询
							const watchChange = () => {
								let cp = root.changeOption
								let condition: any = null
								let urlT = root.optionUrl.indexOf('?') !== -1 ? root.optionUrl : root.optionUrl + '?'
								if (myTypeof(cp) === 'Object' && cp.valKey && cp.key) {
									condition = () => dataGroup.value[cp.valKey]
									urlT = urlT + '&' + cp.key + '='
								} else if (Array.isArray(cp) && cp.some((e) => e.valKey && e.key)) {
									condition = () => {
										let tUrl = ''
										for (let cc of cp) {
											let vT = dataGroup.value[cc.valKey]
											if (isValidVal(vT)) {
												/*如果条件有有效值，则拉取待选项*/
												tUrl += '&' + cc.key + '=' + vT
											} else if (!cc.notRequired) {
												/*条件为必填（notRequired!==true,默认必填），且没有有效值，则不拉取待选项*/
												break
											}
										}
										return tUrl
									}
								}
								if (condition) {
									watchGroup.value.push(
										watch(
											condition,
											(after) => {
												let tV = cloneDeep(tempKeys.value[root.tempKey])
												if (root.tempKey) {
													//当触发changeOption时，将选项清空
													tempKeys.value[root.tempKey] = null
												}
												if (isValidVal(after)) {
													initOption((urlT + after).replace(/\?&/, '?'), root, tV)
												} else {
													root.options = []
													if (root.localOption && root.optionLabel && root.optionVal) {
														root.options = optionAssign(root.localOption, root)
													}
													if (isValidVal(tV)) {
														recoverVal(tV, root)
													}
												}
											},
											{ immediate: true }
										)
									)
								}
							}
							if (root.optionUrl) {
								watchChange()
							} else {
								root.options = []
								if (root.localOption && root.optionLabel && root.optionVal) {
									root.options = optionAssign(root.localOption, root)
								}
							}
						} else {
							initOption(root.optionUrl, root)
						}
					} else if (myTypeof(root.borrowOption) === 'String') {
						/*借用待选项（只能使用静态数据）*/
						root.options = formDataT.value.find((e: Record<string, any>) => e.key === root.borrowOption).options
					}
					const tempKeyC = 'opEle' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyC
						if ((root.type === 'select' && root.multiple) || root.type === 'checkbox') {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? root.defaultVal : []
						} else if (root.booleanVal) {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? (Boolean(root.defaultVal) ? 1 : 0) : null
						} else {
							tempKeys.value[tempKeyC] = root.defaultVal !== undefined ? root.defaultVal : null
						}
						watchGroup.value.push(
							watch(
								() => tempKeys.value[tempKeyC],
								(after) => {
									watchTempKeys(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
				case 'date':
				case 'time':
					const tempKeyB = 'date' + Math.floor(Math.random() * 100000000)
					if (root.key) {
						root.tempKey = tempKeyB
						if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType === 'monthrange') {
							tempKeys.value[tempKeyB] =
								(root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
						} else if (root.type === 'time') {
							let constTime = '1970-01-01 ' //时间类型的不能直接赋值，需要拼接年月日
							if (root.isRange) {
								tempKeys.value[tempKeyB] =
									(root.defaultVal &&
										root.defaultVal2 && [constTime + root.defaultVal, constTime + root.defaultVal2]) ||
									null
							} else {
								tempKeys.value[tempKeyB] = (root.defaultVal && constTime + root.defaultVal) || null
							}
						} else {
							tempKeys.value[tempKeyB] = root.defaultVal || null
						}
						watchGroup.value.push(
							watch(
								() => tempKeys.value[tempKeyB],
								(after) => {
									watchTempKeys(after, root)
								},
								{ immediate: true }
							)
						)
					}
					break
			}
		}
	}

	/**
	 * 初始化表单项的选项，如下拉选项，多选、单选组选项（私有）
	 * @param url 远程选项接口地址
	 * @param root 表单项结构数据对象
	 * @param itemVal 表单项缓存的旧值
	 */
	const initOption = (url: string, root: Record<string, any>, itemVal?: any) => {
		if (url) {
			$request
				.get(url)
				.then((r: any) => {
					if (r?.code === 0) {
						let tOption = r?.data?.data || r?.data || []
						root.options.length = 0
						if (root.localOption) {
							tOption.unshift(...root.localOption)
						}
						if (myTypeof(root.optionFilter) === 'Function') {
							tOption = root.optionFilter(tOption)
						}
						if (root.optionLabel && root.optionVal) {
							root.options = optionAssign(tOption, root)
						}
						if (isValidVal(itemVal)) {
							recoverVal(itemVal, root)
						}
					} else {
						console.warn(root.label + '：' + r?.msg || r?.message)
					}
				})
				.catch((e) => {
					console.warn(root.label + '选项请求错误：' + e.message)
				})
		} else {
			console.warn(root.label + '选项url地址为空')
		}
	}

	/**
	 * 表单选项重新赋值
	 * @param tOption
	 * @param root
	 * @returns {*[]}
	 */
	const optionAssign = (tOption: Record<string, any> = [], root: Record<string, any>) => {
		tOption = tOption.map((eP: Record<string, any>) => {
			let rP: Record<string, any> = {
				label: eP[root.optionLabel],
				val: eP[root.optionVal]
			}
			/*除了要收集绑定值，还要一并收集其他字段,则将其他字段加入到待选列表项*/
			if (root.collectLabel) {
				if (myTypeof(root.collectLabel) === 'Object') {
					if (root.collectLabel.valKey && root.collectLabel.valKey !== 'label') {
						rP[root.collectLabel.valKey] = eP[root.collectLabel.valKey]
					}
				} else if (Array.isArray(root.collectLabel)) {
					for (let tC of root.collectLabel) {
						if (tC.valKey && tC.valKey !== 'label') {
							rP[tC.valKey] = eP[tC.valKey]
						}
					}
				}
			}
			if (rP.val !== null && rP.val !== undefined) {
				return rP
			}
		})
		return tOption
	}

	/**
	 * 如果options中选项的值和缓存的表单项旧值相等,则为表单项恢复之前因待选项改变而清除的值（私有）
	 * @param itemVal 缓存的旧值
	 * @param root 表单项结构数据对象
	 */
	const recoverVal = (itemVal: any, root: Record<string, any>) => {
		if (Array.isArray(root.options)) {
			if (findIndex(root.options, { val: itemVal }) !== -1) {
				tempKeys.value[root.tempKey] = itemVal
			}
		}
	}

	return {
		initDataGroup,
		initItems
	}
}

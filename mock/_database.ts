/**
 * @description 虚拟微型数据库
 */

let _data: Record<string, any> = {}
let idCount: Record<string, any> = {}

/**
 * 增
 * @private
 * @param table
 * @param data
 */
export const _save = (table: string, data: any) => {
	if (!_data[table]) {
		_data[table] = []
		idCount[table] = 0
	}
	let b = data.map((e: any, i: number) => {
		return Object.assign(e, { id: ++idCount[table] })
	})
	b.reverse()
	_data[table].unshift(...b)
	return true
}

/**
 * 删
 * @param table
 * @param condition
 */
export const _delete = (table: string, condition: Function) => {
	if (!_data[table]) {
		return false
	}
	_data[table] = _data[table].filter((e: any) => !condition(e))
	return true
}

/**
 * 查单条数据
 * @param table
 * @param condition
 */
export const _getOne = (table: string, condition?: Function) => {
	if (!_data[table]) {
		return []
	}
	let b = _data[table]
	if (condition) {
		b = b.filter(condition)
	}
	return b
}
/**
 * 查
 * @param table
 * @param current
 * @param size
 * @param condition
 */
export const _get = (table: string, current: number, size: number, condition?: Function) => {
	if (!_data[table]) {
		return {
			data: [],
			total: 0
		}
	}
	let b = _data[table]
	if (condition) {
		b = b.filter(condition)
	}
	return {
		data: size === -1 ? b : b.slice((current - 1) * size, current * size),
		total: b.length
	}
}
/**
 * 改
 * @param table
 * @param data
 */
export const _edit = (table: string, data: Record<string, any>) => {
	if (!_data[table] || !data.hasOwnProperty('id')) {
		return false
	}
	for (let i = 0, len = _data[table].length; i < len; i++) {
		if (_data[table][i].id === data.id) {
			_data[table][i] = data
			return true
		}
	}
	return false
}

/**
 * 列表数据封装
 * @param action
 * @param query
 */
export const listSelect = (action: string, query?: Record<string, any>) => {
	const { ...others } = query
	let r: Record<string, any>
	if (Object.keys(others).length > 0) {
		r = _getOne(action, (e: any) => {
			for (let k in others) {
				if (others.hasOwnProperty(k) && e[k] && others[k] && String(e[k]).indexOf(others[k]) === -1) {
					return false
				}
			}
			return true
		})
	} else {
		r = _getOne(action)
	}
	return r
}

/**
 * 分页数据封装
 * @param action
 * @param query
 */
export const pageSelect = (action: string, query: Record<string, any>) => {
	const { current, size, ...others } = query
	const _current = (current && Number(current)) || 1
	const _size = (size && Number(size)) || 10
	let r: Record<string, any>
	if (Object.keys(others).length > 0) {
		r = _get(action, _current, _size, (e: any) => {
			for (let k in others) {
				if (others.hasOwnProperty(k) && e[k] && others[k] && String(e[k]).indexOf(others[k]) === -1) {
					return false
				}
			}
			return true
		})
	} else {
		r = _get(action, _current, _size)
	}
	return {
		data: r.data,
		total: r.total,
		size: _size,
		pages: (r.total && Math.ceil(r.total / _size)) || 0
	}
}

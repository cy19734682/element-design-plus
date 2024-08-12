export function resultSuccess<T = any>(result: T, { message = 'ok' } = {}) {
	return {
		code: 0,
		data: result,
		message
	}
}

export function resultPageSuccess<T = any>(current: number, size: number, list: T[], { message = 'ok' } = {}) {
	const pageData = pagination(current, size, list)

	return {
		...resultSuccess({
			data: pageData,
			total: list.length,
			size: size,
			pages: (list.length && Math.ceil(list.length / size)) || 0
		}),
		message
	}
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
	return {
		code,
		data: result,
		message
	}
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
	const offset = (pageNo - 1) * Number(pageSize)
	return offset + Number(pageSize) >= array.length
		? array.slice(offset, array.length)
		: array.slice(offset, offset + Number(pageSize))
}


/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken(headers: any): string | undefined {
  return headers?.['x-oauth-token']
}

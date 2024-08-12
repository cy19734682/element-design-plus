import { Random } from 'mockjs'
import { resultSuccess, resultError, getRequestToken } from '../_util'
import { _save, _delete, _edit, listSelect, pageSelect } from '../_database'

function getRandomPics(count = 10): string[] {
	const arr: string[] = []
	for (let i = 0; i < count; i++) {
		arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()))
	}
	return arr
}

const demoList = (() => {
	const result: any[] = []
	for (let index = 0; index < 200; index++) {
		result.push({
			id: `${index}`,
			name: `文章正文${index + 1}`,
			mimeType: index % 2 === 0 ? 'text/html' : 'image/png',
			extension: index % 2 === 0 ? '.html' : '.png',
			imgPath: getRandomPics(Math.ceil(Math.random() * 3) + 1)
		})
	}
	return result
})()

_save('bt-table', demoList)

export default [
	// 分页列表查询
	{
		url: '/mock/bt-table-page',
		method: 'get',
		response: ({ query, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const r = pageSelect('bt-table', query)
			return resultSuccess(r)
		}
	},
	// 列表查询
	{
		url: '/mock/bt-table',
		method: 'get',
		response: ({ query, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const r = listSelect('bt-table', query)
			return resultSuccess(r)
		}
	},
	// 新增
	{
		url: '/mock/bt-table',
		method: 'post',
		response: ({ body, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const r = body
			let typeR = Object.prototype.toString.call(r).replace(/\[object |]/g, '')
			const s = _save('bt-table', typeR === 'Array' ? r : [r])
			return s ? resultSuccess(null) : resultError('')
		}
	},
	// 编辑
	{
		url: '/mock/bt-table',
		method: 'put',
		response: ({ body, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const s = _edit('bt-table', body)
			return s ? resultSuccess(null) : resultError('')
		}
	},

	// 删除
	{
		url: '/mock/bt-table',
		method: 'delete',
		response: ({ body, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const { ids } = body
			const s = _delete('bt-table', (e: any) => ids && String(ids).split(',').indexOf(String(e.id)) > -1)
			return s ? resultSuccess(null) : resultError('')
		}
	}
]

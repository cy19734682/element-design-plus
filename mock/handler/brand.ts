import { _save, listSelect } from '../_database'
import { getRequestToken, resultError, resultSuccess } from '../_util'

const demoList = [
	{
		id: 1,
		name: '华为',
		label: 'HW'
	},
	{
		id: 2,
		name: '荣耀',
		label: 'RY'
	},
	{
		id: 3,
		name: '锤子',
		label: 'CZ'
	},
	{
		id: 4,
		name: '小米',
		label: 'XM'
	},
	{
		id: 5,
		name: '苹果',
		label: 'PG'
	}
]

_save('brand', demoList)

export default [
	// 列表查询
	{
		url: '/mock/brand',
		method: 'get',
		response: ({ query, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const r = listSelect('brand', query)
			return resultSuccess(r)
		}
	}
]

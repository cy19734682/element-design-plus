import { _save, listSelect } from '../_database'
import { getRequestToken, resultError, resultSuccess } from '../_util'

const demoList = [
	{
		id: 1,
		name: '神马技术',
		label: '神马技术',
		parent_id: 0,
		tree_path: '0',
		province: '重庆市',
		province_code: '500000',
		city: '市辖区',
		city_code: '500100',
		district: '沙坪坝区',
		district_code: '500106',
		address: '沙坪坝区',
		longitude: 106.464465,
		latitude: 29.547193,
		sort: 1,
		status: 1,
		children: [
			{
				id: 2,
				name: '研发部门',
				label: '研发部门',
				parent_id: 1,
				tree_path: '0,1',
				province: '重庆市',
				province_code: '500000',
				city: '市辖区',
				city_code: '500100',
				district: '大渡口区',
				district_code: '500104',
				address: '大渡口区',
				longitude: 106.488531,
				latitude: 29.490107,
				sort: 1,
				status: 1
			},
			{
				id: 3,
				name: '测试部门',
				label: '测试部门',
				parent_id: 1,
				tree_path: '0,1',
				province: null,
				province_code: '',
				city: '',
				city_code: '',
				district: '',
				district_code: '',
				address: '',
				longitude: null,
				latitude: null,
				sort: 2,
				status: 1
			},
			{
				id: 4,
				name: '产品部门',
				label: '产品部门',
				parent_id: 1,
				tree_path: '0,1',
				province: null,
				province_code: '',
				city: '',
				city_code: '',
				district: '',
				district_code: '',
				address: '',
				longitude: null,
				latitude: null,
				sort: 3,
				status: 1,
				children: [
					{
						id: 9,
						name: '产品一组',
						label: '产品一组',
						parent_id: 4,
						tree_path: '0,1,4',
						province: '重庆市',
						province_code: '500000',
						city: '市辖区',
						city_code: '500100',
						district: '沙坪坝区',
						district_code: '500106',
						address: '重庆市沙坪坝区',
						longitude: 106.305812,
						latitude: 29.603181,
						sort: 1,
						status: 1
					}
				]
			}
		]
	}
]

_save('dept', demoList)

export default [
	// 列表查询
	{
		url: '/mock/dept',
		method: 'get',
		response: ({ query, headers }: any) => {
			if (!getRequestToken(headers)) {
				return resultError('未登录', { code: -999 })
			}
			const r = listSelect('dept', query)
			return resultSuccess(r)
		}
	}
]

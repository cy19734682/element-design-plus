import { resultError, resultSuccess } from '../_util'

const admin = {
	username: 'admin',
	password: '123456'
}

export default [
	// mock user login
	{
		url: '/mock/login',
		method: 'post',
		response: ({ body }: any) => {
			const { username, password } = body
			if (admin.username !== username || admin.password !== password) {
				return resultError('用户名或密码错误')
			}
			const token = Math.random().toString(36).substr(2)
			return resultSuccess({
				token: token,
				userInfo: { username }
			})
		}
	},
	{
		url: '/mock/logout',
		method: 'get',
		response: () => {
			return resultSuccess(null)
		}
	}
]

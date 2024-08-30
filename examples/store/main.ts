import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import $request from '../../src/methods/request'

export const useStore = defineStore(
	'main',
	() => {
		const { locale } = useI18n()
		//是否登录
		const isLogin = ref<boolean>(false)
		//登录token
		const token = ref<string>('')
		//用户昵称
		const nickname = ref<string>('')
		//国际化语言
		const lang = ref<string>(locale.value || 'zh-cn')
		//服务器前缀地址
		const serverUrl = ref<string>('/mock')
		//是否暗黑模式
		const isDark = ref<boolean>(false)
		//主题颜色
		const theme = ref<string>('#409eff')

		function login(userInfo: Record<string, any>) {
			const { username, password, validateCode, uuid } = userInfo
			return new Promise<void>((resolve, reject) => {
				const loginData = {
					username: username,
					password: password,
					uuid: uuid,
					validateCode: validateCode
				}
				$request
					.post(serverUrl.value + '/login', loginData)
					.then((response: any) => {
						isLogin.value = true
						token.value = response?.token
						nickname.value = response?.userInfo.username
						resolve()
					})
					.catch((error) => {
						reject(error)
					})
			})
		}

		function logout() {
			return new Promise<void>((resolve, reject) => {
				$request
					.get(serverUrl.value + '/logout')
					.then(() => {
						isLogin.value = false
						token.value = ''
						nickname.value = ''
						resolve()
					})
					.catch((error) => {
						reject(error)
					})
			})
		}

		function setLang(v: string) {
			locale.value = v
			lang.value = v
		}

		function setServerUrl(v: string) {
			serverUrl.value = v
		}

		function setIsDark(v: boolean) {
			isDark.value = v
		}

		function setTheme(v: string) {
			theme.value = v
		}

		watch(
			() => theme.value,
			(v: string) => {
				const el: any = document.documentElement
				if (v?.split(',').length > 1) {
					const colors = v.split(',')
					el.style.setProperty('--el-color-primary', colors[1])
					el.style.setProperty('--el-color-success-dark-2', colors[0])
					el.style.setProperty('--el-color-primary-light-3', colors[2])
					el.style.setProperty('--el-color-primary-light-5', colors[3])
					el.style.setProperty('--el-color-primary-light-7', colors[4])
					el.style.setProperty('--el-color-primary-light-8', colors[5])
					el.style.setProperty('--el-color-primary-light-9', colors[6])
				} else {
					el.style.setProperty('--el-color-primary', v)
				}
			},
			{ immediate: true }
		)

		watch(
			() => isDark.value,
			(v: boolean) => {
				if (v) {
          document.documentElement.classList.add('dark')
				} else {
          document.documentElement.classList.remove('dark')
				}
			},
			{ immediate: true }
		)

		return {
			isLogin,
			nickname,
			lang,
			serverUrl,
			token,
			isDark,
			theme,
			login,
			logout,
			setLang,
			setServerUrl,
			setIsDark,
			setTheme
		}
	},
	{
		persist: {
			enabled: true
		}
	}
)

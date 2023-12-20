import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessageBox, ElMessage, ElLoading } from 'element-plus'
import { t } from '../locale'

import type { Collection } from '../public'

export interface ServiceR extends AxiosInstance {
	store?: any
	router?: any
}

export interface RequestConfigR extends AxiosRequestConfig {
	isShowLoading?: boolean
}

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
let Loading: any = null
let Message: any = null
/**
 * axios接口请求设置公共参数
 */
const service: ServiceR = axios.create({
	baseURL: window?._global?.server || '',
	timeout: window?._global?.timeout || 5000,
	withCredentials: window?._global?.withCredentials || true
})
/**
 * axios接口请求拦截，设置headers['x-oauth-token']，并增加接口请求loading效果
 */
service.interceptors.request.use(
	(config) => {
		if (service?.store()?.token) {
			config.headers['x-oauth-token'] = service?.store()?.token
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
/**
 * axios接口响应处理，增加未登录判断
 */
service.interceptors.response.use(
	({ data }) => {
		Loading && Loading.close()
		Message && Message.close()
		ElMessageBox && ElMessageBox.close()
		let { code, msg, message } = data
		if (code === 0) {
			return data
		} else if (code === -999) {
			ElMessageBox.confirm(t('em.loginTips.content'), t('em.loginTips.title'), {
				confirmButtonText: t('em.loginTips.okTxt'),
				cancelButtonText: t('em.button.cancel'),
				type: 'warning'
			})
				.then(() => {
					logoutHandle()
				})
				.catch((e) => {
					console.log(e)
				})
			return Promise.reject(new Error(msg || message || 'Error'))
		} else {
			if (typeof msg === 'object') {
				//针对thinkjs返回的空值校验提示
				msg = Object.values(msg).join(',')
			}
			if (typeof message === 'object') {
				//针对thinkjs返回的空值校验提示
        message = Object.values(message).join(',')
			}
			Message = ElMessage({
				message: msg || message || t('em.sysError'),
				type: 'error'
			})
			return Promise.reject(new Error(msg || message || 'Error'))
		}
	},
	(error) => {
		Loading && Loading.close()
		Message && Message.close()
		let { msg, message } = error?.response?.data
		if (typeof msg === 'object') {
			//针对thinkjs返回的空值校验提示
			msg = Object.values(msg).join(',')
		}
		if (typeof message === 'object') {
			//针对thinkjs返回的空值校验提示
      message = Object.values(message).join(',')
		}
		Message = ElMessage({
			message: message || t('em.sysError'),
			type: 'error'
		})
		return Promise.reject(new Error(msg || message || 'Error'))
	}
)

/**
 * 用户登出操作
 */
function logoutHandle() {
	if (service.store) {
		if (typeof service.store === 'function') {
			const store = service.store()
			if (store.logout) {
				store.logout().then(() => {
          loginToRouter()
        })
			}
		} else {
			service.store.logout().then(() => {
        loginToRouter()
			})
		}
	} else {
		console.warn('store为空，请在安装插件时传入store实例：Vue.use(elmDesign,{store:store})')
	}
}

/**
 * 通过路由跳转登录页面
 */
function loginToRouter(){
  if (service.router) {
    service.router.push({path: '/login', query:{redirect: service.router.currentRoute.value.fullPath}})
  } else {
    console.warn('router为空，请在安装插件时传入router实例：Vue.use(elmDesign,{router:router})')
  }
}

/**
 * 检查入参
 * @param method
 * @param url
 * @param data
 * @param config
 */
function checkRequest(
	method: 'get' | 'post' | 'put' | 'delete',
	url: string,
	data?: Collection,
	config?: RequestConfigR
) {
	return new Promise<void>((s, j) => {
		if (url) {
			if (config?.isShowLoading) {
				Loading = ElLoading.service({
					lock: true,
					background: 'rgba(0, 0, 0, 0.3)'
				})
			}
			let reqData = data
			if (method === 'get') {
				reqData = { params: data }
			} else if (method === 'delete') {
				reqData = { data: data }
			}
			service[method](url, reqData)
				.then((r: any) => {
					s(r)
				})
				.catch((e: any) => {
					j(e)
				})
		} else {
			j('请求地址为空')
			console.warn('请求地址为空')
		}
	})
}

export default {
	/**
	 * @description 初始化该请求插件
	 * @function
	 * @param store 项目中vuex的store
	 * @param router 项目中路由管理
	 */
	init(store:any, router: any) {
		service.store = store
		service.router = router
	},
	/**
	 * post 请求
	 */
  post(url: string, data?: Collection, config?: RequestConfigR) {
		return new Promise<void>((s, j) => {
			checkRequest('post', url, data, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
  /**
	 * put请求
	 */
	put(url: string, data?: Collection, config?: RequestConfigR) {
		return new Promise<void>((s, j) => {
			checkRequest('put', url, data, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
  /**
	 * get请求
	 */
	get(url: string, data?: Collection, config?: RequestConfigR) {
		return new Promise<void>((s, j) => {
			checkRequest('get', url, data, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
  /**
	 * delete 请求
	 */
	delete(url: string, data?: Collection, config?: RequestConfigR) {
		return new Promise<void>((s, j) => {
			checkRequest('delete', url, data, config)
				.then((r) => {
					s(r)
				})
				.catch((e) => {
					j(e)
				})
		})
	},
  /**
	 * 并发请求
	 */
	all: axios.all /**
	 * 并发请求结果分离
	 */,
	spread: axios.spread /**
	 * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
	 */,
	config: service
}

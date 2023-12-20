/**
 * @description 源代码入口文件
 */
import type { App } from 'vue'
import * as components from './components'
import * as globalFunc from './methods'
import localeFile from './locale'
import $request from './methods/request'
import Permission from './directive/permission'
import "./style/iconfont/iconfont"

export * from './components'
export * from './methods'
export { default as $request } from './methods/request'
export { exportTableToExcel, exportJsonToExcel } from './methods/export2Excel'
export { exportTxtToZip } from './methods/export2Zip'

const methodsR: Record<string, any> = {
	$request,
	...globalFunc
}

export interface plugROption {
	notRegistryGlobal?: boolean
	store?: any
	useStore?: any
	router?: Record<keyof any, any>
	locale?: Record<keyof any, any>
	i18n?: Record<keyof any, any>
	[k: keyof any]: any
}

const install = function (app: App, options: plugROption = {}) {
	$request.init(options.useStore || options.store, options.router)

	if (options.locale) {
		localeFile.use(options.locale)
	}

	if (options.i18n) {
		localeFile.i18n(options.i18n)
	}
 
	if (!options.notRegistryGlobal) {
    /*挂载组件*/
		Object.keys(components).forEach((key) => {
			if (!app.component(key)) {
				app.component(key, (components as Record<string, any>)[key])
			}
		})
    
    /*挂载公共方法*/
		Object.keys(methodsR).forEach((key) => {
			app.config.globalProperties[key] = methodsR[key]
		})
	}

	if (!app.directive('has')) {
    app.directive('has', Permission)
	}
}

const locale = localeFile.use

const i18n = localeFile.i18n
export default {
	locale,
	i18n,
	install,
	...globalFunc,
	$request,
}

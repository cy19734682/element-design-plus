import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { useStore } from './store/main'
import i18n from './lang'

import { setupProdMockServer } from '../mock/_createProductionServer'
import App from '@/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import elmDesign from '../src'
import 'normalize.css/normalize.css' // 标准化样式（消除浏览器差异）
import 'element-plus/dist/index.css'
import '../src/style/index.scss'
import './style/index.scss'
import 'github-markdown-css/github-markdown-light.css'

setupProdMockServer()

const store = createPinia()
store.use(piniaPersist)

let app = createApp(App)
app
	.use(store)
	.use(router)
	.use(i18n)
	.use(ElementPlus)
	.use(elmDesign, {
		notRegistryGlobal: true,
		useStore,
		router,
		i18n
	})
	.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { useStore } from './store/main'
import i18n from './lang'

import App from '@/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import elmDesign from '../src'
import JsonView from 'vue-json-viewer'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import javascript from 'highlight.js/lib/languages/javascript'
import 'normalize.css/normalize.css' // 标准化样式（消除浏览器差异）
import 'element-plus/dist/index.css'
import '../src/style/index.scss'
import './style/index.scss'
import 'github-markdown-css/github-markdown-light.css'
import 'highlight.js/styles/stackoverflow-light.min.css'

hljs.registerLanguage('javascript', javascript)

const store = createPinia()
store.use(piniaPersist)

let app = createApp(App)
app
	.use(store)
	.use(router)
	.use(i18n)
	.use(JsonView)
	.use(hljsVuePlugin)
	.use(ElementPlus)
	.use(elmDesign, {
		notRegistryGlobal: true,
		useStore,
		router,
		i18n
	})
	.mount('#app')

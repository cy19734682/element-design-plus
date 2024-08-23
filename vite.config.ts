import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import type { UserConfig, ConfigEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv): UserConfig => {
	const isLib = mode === 'lib'
	let libOption = {
		entry: resolve(__dirname, 'src/index.ts'),
		name: 'elmDesign',
		fileName: 'elmDesign'
	}
	const externalOption = [
		'@wangeditor/editor',
		'@wangeditor/editor-for-vue',
		'axios',
		'ar-cascader',
		'deepmerge',
		'echarts',
		'element-china-area-data',
		'js-cookie',
		'jszip',
		'lodash-es',
		'moment',
		'pinia',
		'element-plus',
		'vue',
		'vue-i18n',
		'vue-router',
		'vue-baidu-map-3x',
		'xlsx'
	]
	return {
		base: './',
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				// targets to transform
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
					/\.md$/ // .md
				],

				// global imports to register
				imports: [
					// presets
					'vue',
					'vue-router',
					'vue-i18n',
					'pinia', // custom
					{
						'@vueuse/core': [
							// named imports
							'useMouse', // import { useMouse } from '@vueuse/core',
							// alias
							['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
						],
						axios: [
							// default imports
							['default', 'axios'] // import { default as axios } from 'axios',
						]
						/*'[package-name]': [
             '[import-names]',
             // alias
             ['[from]', '[alias]'],
             ],*/
					}, // example type import
					{
						from: 'vue-router',
						imports: ['RouteLocationRaw'],
						type: true
					}
				], // Enable auto import by filename for default module exports under directories
				defaultExportByFilename: false,

				// Auto import for module exports under directories
				// by default it only scan one level of modules under the directory
				dirs: [
					// './hooks',
					// './composables' // only root modules
					// './composables/**', // all nested modules
					// ...
				],

				// Filepath to generate corresponding .d.ts file.
				// Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
				// Set `false` to disable.
				dts: './auto-imports.d.ts',

				// Auto import inside Vue template
				// see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
				vueTemplate: false,

				// Custom resolvers, compatible with `unplugin-vue-components`
				// see https://github.com/antfu/unplugin-auto-import/pull/23/
				resolvers: [],

				// Inject the imports at the end of other imports
				injectAtEnd: true
			}),
			viteMockServe({
				ignore: /^_/,
				mockPath: 'mock',
				localEnabled: command === 'serve',
				prodEnabled: command !== 'serve' && !isLib,
				injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
        `,
				injectFile: 'examples/main.ts'
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./examples', import.meta.url))
			}
		},
		server: {
			proxy: {
				'/admin': {
					target: 'http://localhost:8360',
					changeOrigin: true,
					rewrite: (path: any) => path.replace(/^\/admin/, '')
				}
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					javascriptEnabled: true,
					rewriteUrls: 'all',
					math: 'always'
				}
			}
		},
		assetsInclude: ['**/*.md'],
		define: {},
		build: {
			sourcemap: false,
			lib: isLib ? libOption : undefined,
			rollupOptions: {
				external: isLib ? externalOption : undefined,
				output: {
					dir: isLib ? './lib' : './dist'
				}
			},
			copyPublicDir: !isLib
		}
	}
}

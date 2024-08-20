<script setup lang="ts">
	import { useStore } from '@/store/main'
	import { useI18n } from 'vue-i18n'
	import { EmIcons } from '../../src'
	import PackageJson from '../../package.json'

	const { locale, t } = useI18n()
	const store = useStore()
	const router = useRouter()

	const homepage = PackageJson.homepage
	const serverUrl = computed({
		get() {
			return store.serverUrl
		},
		set(v) {
			store.setServerUrl(v)
		}
	})
	const language = computed({
		get() {
			return locale.value
		},
		set(v) {
			locale.value = v
			store.setLang(v)
		}
	})

	const login = () => {
		router.push('/login')
	}
	const logout = () => {
		store.logout()
	}
	const changeLang = () => {
		language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
	}
</script>
<template>
	<div class="app-header">
		<div class="left">
			<span class="text">Element-Design-Plus</span>
		</div>
		<div class="right">
			<div class="line-item">
				<el-tooltip :content="t('button.localServer') + ' / ' + t('button.nodeServer')">
					<el-switch
						v-model="serverUrl"
						class="ml-2"
						inline-prompt
						active-value="/mock"
						inactive-value=""
						active-text="Local"
						inactive-text="Node"
					/>
				</el-tooltip>
			</div>
			<div class="line-item">
				<el-tooltip content="中文 / English">
					<div class="lang-box" @click="changeLang">
						<span class="lang-item" :class="{ act: language === 'zh-cn', acn: language !== 'zh-cn' }">中</span>
						<span class="lang-item" :class="{ act: language === 'en', acn: language !== 'en' }">En</span>
					</div>
				</el-tooltip>
			</div>
			<div class="line-item">
				<el-tooltip content="Github">
					<a :href="homepage" target="_blank">
						<em-icons style="font-size: 20px" icon-class="github" />
					</a>
				</el-tooltip>
			</div>
			<div class="line-item">
				<div v-if="store.isLogin">
					<el-dropdown>
						<el-avatar :size="32">
							<span style="font-size: 12px">{{ store.nickname }}</span>
						</el-avatar>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item @click="logout">{{ t('login.logOut') }}</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<el-avatar v-else :size="32" @click="login">
					<span style="font-size: 12px">{{ t('login.logIn') }}</span>
				</el-avatar>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.app-header {
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #dcdfe6;
		.left {
			color: #409eff;
			font-size: 20px;
			font-weight: bold;
		}
		.right {
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.line-item {
				position: relative;
				cursor: pointer;
				margin-left: 40px;

				.lang-box {
					position: relative;
					width: 1.2em;
					height: 1.2em;
					.lang-item {
						position: absolute;
						font-size: 1.2em;
						line-height: 1;
						border: 1px solid rgba(0, 0, 0, 0.88);
						color: rgba(0, 0, 0, 0.88);
						&.act {
							inset-inline-start: -5%;
							top: 0;
							z-index: 1;
							background-color: rgba(0, 0, 0, 0.88);
							color: #ffffff;
							transform: scale(0.7);
							transform-origin: 0 0;
						}
						&.acn {
							inset-inline-end: -5%;
							bottom: 0;
							z-index: 0;
							transform: scale(0.5);
							transform-origin: 100% 100%;
						}
					}
				}
			}
		}
	}
</style>

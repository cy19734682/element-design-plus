<script setup lang="ts">
	import { useStore } from '@/store/main'
	import { useI18n } from 'vue-i18n'
	import { EmIcons } from '../../src'
	import { Sunny, Moon } from '@element-plus/icons-vue'
	import PackageJson from '../../package.json'

	const { t } = useI18n()
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
	const languages = ref<any[]>([
		{ label: '中文', val: 'zh-cn' },
		{ label: 'English', val: 'en' }
	])

	const themes = ref<any[]>([
		{ label: '默认色', val: '#337ecc,#409eff,#79bbff,#a0cfff,#c6e2ff,#d9ecff,#ecf5ff' },
		{ label: '科技蓝', val: '#0034b5,#0052d9,#266fe8,#4787f0,#699ef5,#96bbf8,#bbd3fb' },
		{ label: '炽热红', val: '#951114,#b11f26,#c9353f,#e34d59,#f36d78,#f78d94,#f8b9be' },
		{ label: '活力橙', val: '#842b0b,#9e3610,#ba431b,#d35a21,#ed7b2f,#f2995f,#f7c797' },
		{ label: '极光绿', val: '#044f2a,#056334,#067945,#078d5c,#00a870,#48c79c,#85dbbe' },
		{ label: '富贵紫', val: '#572796,#6d3bac,#834ec2,#9963d8,#ae78f0,#c68cff,#d8abff' },
		{ label: '土豪金', val: '#754c00,#8c5f00,#a37200,#ba8700,#d29c00,#ebb105,#fbca25' },
		{ label: '玫瑰粉', val: '#9b006b,#bc0088,#d42c9d,#ed49b4,#ff66cc,#ff8fe1,#ffb2f2' }
	])

	const login = () => {
		router.push('/login')
	}
	const logout = () => {
		store.logout()
	}

	const switchMode = (e: any) => {
		const x = e.clientX
		const y = e.clientY
		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
		// 兼容性处理
		if (!(window?.document as any)?.startViewTransition) {
			store.isDark = !store.isDark
			return
		}
		const transition = (window?.document as any)?.startViewTransition(() => {
			store.isDark = !store.isDark
		})
		transition.ready.then(() => {
			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
			document.documentElement.animate(
				{
					clipPath: store.isDark ? [...clipPath].reverse() : clipPath
				},
				{
					duration: 400,
					easing: 'ease-in',
					pseudoElement: store.isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
				}
			)
		})
	}

	store.setIsDark(store.isDark)
	store.setTheme(store.theme)
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
						inline-prompt
						active-value="/mock"
						inactive-value="/"
						active-text="Local"
						inactive-text="Node"
					/>
				</el-tooltip>
			</div>
			<div class="line-item">
				<el-tooltip content="暗黑模式 / 亮白模式">
					<el-button plain circle :icon="store.isDark ? Moon : Sunny" @click="switchMode($event)" />
				</el-tooltip>
			</div>
			<div class="line-item">
				<el-dropdown placement="bottom" trigger="click" @command="store.setTheme">
					<div>
						<el-tooltip content="主题切换">
							<el-button plain circle>
								<template #icon>
									<em-icons style="font-size: 20px" icon-class="color" />
								</template>
							</el-button>
						</el-tooltip>
					</div>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item
								v-for="(item, index) in themes"
								:command="item.val"
								:key="'themes' + index"
								:tabindex="index"
								class="dropdown-item-li"
								:disabled="item.val === store.theme"
							>
								<span style="margin-right: 10px">
									{{ item.label }}
								</span>
								<span
									class="theme-c"
									v-for="(i, _i) in item.val.split(',')"
									:key="i + _i"
									style="display: inline-block; width: 20px; height: 20px; margin: 0 2px; border-radius: 50%"
									:style="{ backgroundColor: i }"
								></span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div class="line-item">
				<el-dropdown placement="bottom" trigger="click">
					<div>
						<el-tooltip content="中英文切换">
							<el-button plain circle>
								<template #icon>
									<em-icons style="font-size: 20px" icon-class="international" />
								</template>
							</el-button>
						</el-tooltip>
					</div>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item
								v-for="(item, index) in languages"
								@click="store.setLang(item.val)"
								:key="'lang' + index"
								:disabled="item.val === store.lang"
							>
								{{ item.label }}
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div class="line-item">
				<el-tooltip content="Github">
					<a :href="homepage" target="_blank">
						<el-button plain circle>
							<template #icon>
								<em-icons style="font-size: 20px" icon-class="github" />
							</template>
						</el-button>
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
		border-bottom: 1px solid var(--el-border-color-light);
		.left {
			color: var(--el-color-primary);
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
			}
		}
	}
</style>

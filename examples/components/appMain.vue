<script setup lang="ts">
	import appHeader from '../components/appHeader.vue'
	import appSideMenu from '../components/appSideMenu.vue'
	import appMd from '../components/appMd.vue'
	import { useStore } from '@/store/main'
	import zhCn from 'element-plus/es/locale/lang/zh-cn' // 中文包
	import en from 'element-plus/es/locale/lang/en'

	const store = useStore()
	const language = computed(() => (store.lang === 'zh-cn' ? zhCn : en))
</script>
<template>
	<el-config-provider :locale="language">
		<div class="app-main-container">
			<app-header />
			<main class="app-main">
				<app-side-menu />
				<div class="app-container">
					<router-view v-slot="{ Component }">
						<transition name="fade-transform" mode="out-in">
							<keep-alive>
								<component :is="Component" />
							</keep-alive>
						</transition>
					</router-view>
				</div>
				<app-md />
			</main>
		</div>
	</el-config-provider>
</template>
<style lang="scss" scoped>
	.app-main-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		width: 100%;
		height: 100%;
		.app-main {
			flex: 1;
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;
			display: flex;
			.app-container {
				flex: 1;
				min-width: 0;
				padding: 10px;
			}
		}
	}
</style>

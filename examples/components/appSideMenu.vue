<script setup lang="ts">
	import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
	import { useI18n } from 'vue-i18n'

	const router = useRouter()
	const route = useRoute()
	const { t } = useI18n()

	const routeArr: any = computed(() =>
		router.options.routes.filter((e) => {
			if (e.name && e.name !== 'login' && e.name !== 'index') {
				return e
			}
		})
	)
	const onRoutes = computed(() => route.path)

	const showSide = ref<boolean>(true)
</script>
<template>
	<div class="app-sidebar" :class="{ show: showSide }">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" unique-opened router>
			<template v-for="item in routeArr">
				<template v-if="item.children">
					<el-sub-menu :index="item.path" :key="item.name">
						<template #title>
							<span>{{ t(`route.${item?.meta?.title}`) }}</span>
						</template>
						<template v-for="subItem in item.children">
							<el-sub-menu v-if="subItem.children" :index="item.path + '/' + subItem.path" :key="subItem.name">
								<template #title>{{ t(`route.${subItem?.meta?.title}`) }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.name">
									{{ t(`route.${threeItem?.meta?.title}`) }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item v-else :index="item.path + '/' + subItem.path">
								{{ t(`route.${subItem?.meta?.title}`) }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="item.path" :key="item.name">
						<template #title>{{ t(`route.${item?.meta?.title}`) }}</template>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
		<div class="side-btn" :class="{ none: !showSide }" @click="showSide = !showSide">
			<el-icon size="14" v-if="showSide"><ArrowLeft /></el-icon>
			<el-icon size="14" v-else><ArrowRight /></el-icon>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.app-sidebar {
		position: relative;
		width: 0;
		transition: all 0.2s;

		&.show {
			width: 250px;
		}
		.logo {
			display: flex;
			padding: 6px 15px;
			align-items: center;

			.text {
				color: #ffffff;
				font-size: 26px;
				font-weight: bold;
				padding: 12px 0 12px 10px;
				transition: width 2s ease;
			}
		}

		.el-menu {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		.side-btn {
			position: absolute;
			z-index: 1000;
			top: 40%;
			right: -12px;
			cursor: pointer;
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			border: 1px solid #dcdfe6;
			box-shadow: 0 4px 10px #0000001a;
			transition: all 0.15s;
			border-radius: 50%;
			&:hover {
				transform: scale(1.1);
			}
			&.none {
				right: -24px;
			}
		}
	}
</style>

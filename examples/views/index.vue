<script lang="ts" setup>
	import appHeader from '../components/appHeader.vue'

	const router = useRouter()

	let routeArr = ref<any[]>([])
	routeArr.value = router.options.routes.filter((e) => {
		if (e.name && e.name !== 'login' && e.name !== 'index') {
			return e
		}
	})
</script>
<template>
	<div class="home">
		<h1>{{ $t('route.dashboard') }}</h1>
		<appHeader />
		<el-row :gutter="12" v-for="(item, index) of routeArr" :key="'f_' + index">
			<el-col :span="8" v-for="(c, index1) of item.children" :key="'c' + index1">
				<el-card shadow="hover">
					<router-link class="linkA" :to="item.path + '/' + c.path" :key="'item' + index" :title="c.meta.title">
						<span class="txt">{{ c.meta.title }}</span>
					</router-link>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<style lang="scss" scoped>
	.home {
		padding: 50px;

		.lang {
			padding: 20px 0;
			text-align: right;
		}

		.el-col {
			margin-bottom: 20px;
		}

		.linkA {
			color: #409eff;
			cursor: pointer;

			&:hover {
				opacity: 0.85;
			}
		}
	}
</style>

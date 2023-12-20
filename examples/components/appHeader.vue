<script setup lang="ts">
	import { useStore } from '@/store/main'
	import setLange from '../components/setLange.vue'
	import { useI18n } from 'vue-i18n'

	const store = useStore()
	const router = useRouter()
	const { t } = useI18n()

	const curPath = computed(() => router.currentRoute.value.fullPath)

	const login = () => {
		router.push('/login')
	}
	const back = () => {
		router.go(-1)
	}
	const logout = () => {
		store.logout()
	}
</script>
<template>
	<div class="app-header">
		<div class="app-head-row">
			<div class="back">
				<el-button @click="back" size="small" icon="el-icon-arrow-left" v-if="curPath !== '/index'">返回</el-button>
			</div>
			<div class="user-info">
				<div v-if="store.isLogin">
					{{ store.nickname }}
					<el-button @click="logout">注销</el-button>
				</div>
				<el-button v-else type="primary" @click="login"> {{ t('login.logIn') }}</el-button>
			</div>
			<setLange />
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.app-header {
		.app-head-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>

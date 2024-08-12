<script setup lang="ts">
	import { useStore } from '@/store/main'
	import setLange from './setLange.vue'
	import setServer from './setServer.vue'
	import { useI18n } from 'vue-i18n'

	const store = useStore()
	const router = useRouter()
	const { t } = useI18n()

	const login = () => {
		router.push('/login')
	}
	const logout = () => {
		store.logout()
	}
</script>
<template>
	<div class="app-header">
		<div class="left">
			<span class="text">Element-Design-Plus</span>
		</div>
		<div class="right">
			<setServer class="line-item" />
			<setLange class="line-item" />
			<div class="user-info">
				<div v-if="store.isLogin">
					{{ store.nickname }}
					<el-button @click="logout">注销</el-button>
				</div>
				<el-button v-else type="primary" @click="login"> {{ t('login.logIn') }}</el-button>
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
    border-bottom: 1px solid #eee;
    .left{
      color: #2c3e50;
      font-size: 20px;
      font-weight: bold;
    }
		.right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.line-item {
				margin-right: 40px;
				position: relative;
				&::after {
					content: '';
					height: 20px;
					border-left: 1px #999 solid;
					position: absolute;
					top: 0;
					right: -20px;
				}
			}
		}
	}
</style>

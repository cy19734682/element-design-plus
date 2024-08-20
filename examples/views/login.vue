<script lang="ts" setup>
	import { useStore } from '@/store/main'

	const store = useStore()
	const router = useRouter()
	const route = useRoute()
	const { t } = useI18n()

	const validatePassword = (rule: any, value: any, callback: any) => {
		if (value.length < 6) {
			callback(new Error('The password can not be less than 6 digits'))
		} else {
			callback()
		}
	}
	const loginForm = reactive<Record<string, any>>({
		username: 'admin',
		password: '123456',
		validateCode: undefined,
		uuid: undefined
	})
	const loginRules = {
		username: [
			{
				required: true,
				trigger: 'blur'
			}
		],
		password: [
			{
				required: true,
				trigger: 'blur',
				validator: validatePassword
			}
		]
	}
	let loading = ref<boolean>(false)
	const loginFormRef = ref<any>()

	const handleLogin = () => {
		loginFormRef.value.validate((valid: boolean) => {
			if (valid) {
				loading.value = true
				store
					.login(loginForm)
					.then(
						() => {
							router.replace((route?.query?.redirect as any) || '/')
						},
						(reject) => {
							console.warn(reject)
						}
					)
					.catch((e) => {
						console.warn(e)
					})
					.finally(() => {
						loading.value = false
					})
			} else {
				console.log('error submit!!')
				return false
			}
		})
	}
</script>
<template>
	<div class="login-container">
		<el-form
			ref="loginFormRef"
			:model="loginForm"
			:rules="loginRules"
			class="login-form"
			autocomplete="on"
			label-position="left"
		>
			<el-form-item prop="username">
				<el-input
					ref="username"
					v-model="loginForm.username"
					:placeholder="$t('login.username')"
					name="username"
					type="text"
					tabindex="1"
					autocomplete="on"
				/>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					ref="password"
					v-model="loginForm.password"
					type="password"
					:placeholder="$t('login.password')"
					name="password"
					tabindex="2"
					autocomplete="on"
					@keyup.enter.native="handleLogin"
				/>
			</el-form-item>
			<el-button
				:loading="loading"
				type="primary"
				style="width: 100%; margin-bottom: 30px"
				@click.native.prevent="handleLogin"
			>
				{{ $t('login.logIn') }}
			</el-button>
		</el-form>
	</div>
</template>

<style lang="scss" scoped>
	$bg: #2d3a4b;
	$dark_gray: #889aa4;
	$light_gray: #eee;
	.login-container {
		min-height: 100%;
		width: 100%;
		background-color: $bg;
		overflow: hidden;

		.login-form {
			position: relative;
			width: 520px;
			max-width: 100%;
			padding: 160px 35px 0;
			margin: 0 auto;
			overflow: hidden;
		}

		.title-container {
			position: relative;

			.title {
				font-size: 26px;
				color: $light_gray;
				margin: 0 auto 40px auto;
				text-align: center;
				font-weight: bold;
			}

			.set-language {
				color: #fff;
				position: absolute;
				top: 3px;
				font-size: 18px;
				right: 0;
				cursor: pointer;
			}
		}

		.show-pwd {
			position: absolute;
			right: 10px;
			top: 7px;
			font-size: 16px;
			color: $dark_gray;
			cursor: pointer;
			user-select: none;
		}

		.thirdparty-button {
			position: absolute;
			right: 0;
			bottom: 6px;
		}

		.validate-code {
			position: absolute;
			right: 0;
			top: 0;
			height: 48px;
			cursor: pointer;
			vertical-align: middle;
		}

		@media only screen and (max-width: 470px) {
			.thirdparty-button {
				display: none;
			}
		}
	}
</style>

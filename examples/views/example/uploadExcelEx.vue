<script lang="ts" setup>
	import { EmUploadExcel } from '../../../src'

	defineOptions({
		name: 'uploadExcelEx'
	})
	let value = ref<string>('hello')

	const onSuccess = (data: any) => {
		console.log(data)
	}
</script>
<template>
	<div class="container">
		<h2>excel上传</h2>
		<em-upload-excel :onSuccess="onSuccess" />
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>

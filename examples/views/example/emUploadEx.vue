<script lang="ts" setup>
	import { EmUpload } from '../../../src'

	defineOptions({
		name: 'EmUploadEx'
	})
	let id = ref<string>('/bg/2023-09/651297382d5f001095be7c90.jpg')

	const onfileChange = (data: any) => {
		console.log(data)
	}
</script>
<template>
	<div class="container">
		<h2>文件上传</h2>
		<em-upload
			v-model="id"
			fileName="files"
			listType="picture-card"
			:autoUpload="false"
			@on-file-change="onfileChange"
		/>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>

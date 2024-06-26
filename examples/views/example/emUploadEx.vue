<script lang="ts" setup>
	import { EmUpload } from '../../../src'

	defineOptions({
		name: 'EmUploadEx'
	})
	let id = ref<string>('http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png')

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
      upload-fetch
			@update:modelValue="onfileChange"
		/>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
	}
</style>

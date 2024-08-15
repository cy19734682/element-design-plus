<script lang="ts" setup>
	import { EmUploadExcel } from '../../../src'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { code1 } from '@/codeJson/emUploadExcelEx'

	defineOptions({
		name: 'uploadExcelEx'
	})

	const dataJson = ref<Record<string, any>>({})

	const onSuccess = (data: any) => {
		console.log(data)
		dataJson.value = data
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>excel上传</div>
			</template>
			<em-upload-excel :onSuccess="onSuccess" />
			<div class="json-title">解析数据:</div>
			<json-viewer :value="dataJson" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>

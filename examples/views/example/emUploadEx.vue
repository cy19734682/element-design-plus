<script lang="ts" setup>
	import { code1, code2, code3 } from '@/codeJson/emUploadEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { EmUpload } from '../../../src'

	defineOptions({
		name: 'EmUploadEx'
	})
	let id1 = ref<string[]>(['666963bb096132e67ebe120d.png'])
	let id2 = ref<any>(null)
	let id3 = ref<string>('http://cdn.cy1973.cn/screen-designer/images/material/2024-06/666963bb096132e67ebe120d.png')

	const onfileChange = (data: any) => {
		console.log(data)
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>自动上传</div>
			</template>
			<em-upload v-model="id1" fileName="files" listType="picture-card" :length="2" @update:modelValue="onfileChange" />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
		<el-divider />
		<el-card>
			<template #header>
				<div>手动上传</div>
			</template>
			<em-upload
				v-model="id2"
				:auto-upload="false"
				:length="3"
				fileName="files"
				listType="picture-card"
				@update:modelValue="onfileChange"
			/>
			<template #footer>
				<source-code-view :code="code2" />
			</template>
		</el-card>
		<el-divider />
		<el-card>
			<template #header>
				<div>网络地址上传</div>
			</template>
			<em-upload
				v-model="id3"
				fileName="files"
				listType="picture-card"
				upload-fetch
				@update:modelValue="onfileChange"
			/>
			<template #footer>
				<source-code-view :code="code3" />
			</template>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
	import { EmCascaderArea } from '../../../src'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { code1 } from '@/codeJson/emCascaderAreaEx'

	defineOptions({
		name: 'emCascaderAreaEx'
	})
	let value = ref<string[]>(['15', '1501', '150104'])
	let name = ref<string[]>([])
	const onValChange = (data: any) => {
		console.log(data)
	}
	const onNameChange = (data: any) => {
		console.log(data)
		name.value = data
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>省市区选择</div>
			</template>
			<em-cascader-area v-model="value" :level="2" @on-val-change="onValChange" @on-name-change="onNameChange" />
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="value" theme="my-awesome-json-theme" expanded copyable />
			<div class="json-title">名称数据:</div>
			<json-viewer :value="name" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>

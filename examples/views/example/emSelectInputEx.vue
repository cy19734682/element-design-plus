<script lang="ts" setup>
	import { EmSelectInput } from '../../../src'
	import { useStore } from '@/store/main'
	import { code1, code2 } from '@/codeJson/emSelectInputEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'

	defineOptions({
		name: 'emSelectInputEx'
	})

	const store = useStore()
	let value1 = ref<Record<string, any>>({})
	let value2 = ref<Record<string, any>>({})
	let data = ref<any[]>([
		{
			val: '1',
			label: '小学'
		},
		{
			val: '2',
			label: '初中'
		},
		{
			val: '3',
			label: '高中'
		},
		{
			val: '4',
			label: '大学'
		}
	])

	const onValChange = (val: any) => {
		console.log(val)
	}
	const onChange = (val: any) => {
		console.log(val)
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>下拉选择输入(远程数据)</div>
			</template>
			<em-select-input
				v-model="value1"
				:url="store.serverUrl + '/brand'"
				optionVal="label"
				optionLabel="name"
				@on-val-change="onValChange"
				@on-change="onChange"
			/>
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="value1" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
		<el-divider />
		<el-card>
			<template #header>
				<div>下拉选择输入（静态数据）</div>
			</template>
			<em-select-input
				v-model="value2"
				:data="data"
				optionVal="label"
				optionLabel="name"
				@on-val-change="onValChange"
				@on-change="onChange"
			/>
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="value2" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code2" />
			</template>
		</el-card>
	</div>
</template>

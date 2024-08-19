<script lang="ts" setup>
	import { EmCascader } from '../../../src'
	import { code1, code2 } from '@/codeJson/emCascaderEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { useStore } from '@/store/main'

	defineOptions({
		name: 'EmCascaderEx'
	})

	const store = useStore()

	let value1 = ref<any>(null)
	let name1 = ref<any>({})
	let data = ref<any[]>([
		{
			id: 1,
			name: '爷爷',
			children: [
				{
					id: 2,
					name: '父亲'
				},
				{
					id: 3,
					name: '叔叔'
				}
			]
		}
	])
	const onNameChange1 = (data: any) => {
		console.log(data)
		name1.value = { val: value1, name: data }
	}

	let value2 = ref<any>(null)
	let name2 = ref<any>({})
	const onNameChange2 = (data: any) => {
		console.log(data)
		name2.value = { val: value2, name: data }
	}

	const onValChange = (data: any) => {
		console.log(data)
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>自定义级联选择</div>
			</template>
			<em-cascader v-model="value1" :data="data" @on-val-change="onValChange" @on-name-change="onNameChange1" />
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="name1" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
		<el-divider />
		<el-card>
			<template #header>
				<div>远程级联选择</div>
			</template>
			<em-cascader
				v-model="value2"
				:url="store.serverUrl + '/dept'"
				@on-val-change="onValChange"
				@on-name-change="onNameChange2"
			/>
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="name2" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code2" />
			</template>
		</el-card>
	</div>
</template>

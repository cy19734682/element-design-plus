<script lang="ts" setup>
	import { EmTableSelect } from '../../../src'
	import { useStore } from '@/store/main'
	import { code1 } from '@/codeJson/emTableSelectEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'
	import { cloneDeep } from 'lodash-es'

	defineOptions({
		name: 'emTableSelectEx'
	})

	const store = useStore()
	let deptId = ref<any[]>([82])
	const searchForm = ref<any[]>([
		{
			type: 'input',
			key: 'name',
			label: '商品名称'
		}
	])
	const columns = ref<any[]>([
		{
			key: 'id',
			label: 'ID'
		},
		{
			key: 'name',
			label: '名称'
		},
		{
			key: 'mimeType',
			label: '类型'
		},
		{
			key: 'extension',
			label: '后缀'
		}
	])

	const onDataChange = (d: any) => {
		console.log(d)
	}
	const changeRow = (d: any) => {
		console.log(d)
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>表格选择器</div>
			</template>
			<em-table-select
				ref="tableSelectRef"
				v-model="deptId"
				:searchForm="searchForm"
				:columns="columns"
				multiple
				:url="store.serverUrl + '/bt-table-page?size=-1'"
				@on-data-change="onDataChange"
				@changeRow="changeRow"
			/>
			<div class="json-title">绑定数据:</div>
			<json-viewer :value="cloneDeep(deptId)" theme="my-awesome-json-theme" expanded copyable />
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
	import { EmTableSelect } from '../../../src'
	import { useStore } from '@/store/main'

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
	const props = ref<Record<string, any>>({
		key: 'id',
		label: 'name'
	})

	const onDataChange = (d: any) => {
		console.log(d)
	}
	const changeRow = (d: any) => {
		console.log(d)
	}
</script>
<template>
	<div class="container">
		<h2>表格选择器</h2>
		<div class="form-box">
			<em-table-select
				ref="tableSelectRef"
				v-model="deptId"
				:searchForm="searchForm"
				:columns="columns"
				multiple
				:url="store.serverUrl + '/bt-table-page'"
				@on-data-change="onDataChange"
				@changeRow="changeRow"
			/>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.container {
		padding: 40px;
		overflow-y: auto;
		height: 100%;
	}
</style>

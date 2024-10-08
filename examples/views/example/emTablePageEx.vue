<script lang="ts" setup>
	import { EmSearchForm, EmTablePage, EmFormModal } from '../../../src'
	import { ElMessage, ElMessageBox, ElButton } from 'element-plus'
	import { cloneDeep } from 'lodash-es'
	import { exportTableToExcel, exportJsonToExcel, exportTxtToZip, isValidVal, $request } from '../../../src'
	import { useStore } from '@/store/main'
	import { code1 } from '@/codeJson/emTablePageEx'
	import sourceCodeView from '@/components/sourceCodeView.vue'

	defineOptions({
		name: 'emTablePageEx'
	})

	const store = useStore()
	const searchFormRef = ref<any>()
	const tableRef = ref<any>()
	const formModalRef = ref<any>()

	let activeRow = ref<Record<string, any>>({})
	let searchData = ref<Record<string, any>>({})
	let selectIds = ref<string[]>([])
	const searchFormData = ref<any[]>([
		{
			type: 'input',
			key: 'name',
			placeholder: '名称'
		},
		{
			type: 'input',
			placeholder: '类型',
			key: 'mimeType'
		},
		{
			type: 'select',
			placeholder: '后缀',
			key: 'extension',
			options: [
				{
					label: 'jpg',
					val: '.jpg'
				},
				{
					label: 'html',
					val: '.html'
				},
				{
					label: 'png',
					val: '.png'
				},
				{
					label: 'jpeg',
					val: '.jpeg'
				}
			]
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
		},
		{
			label: '操作',
			width: 250,
			render: (params: any) => {
				return h('div', [
					h(
						ElButton,
						{
							type: 'warning',
							onClick: (e: any) => {
								e.stopPropagation()
								activeRow.value = params.row
								formModalRef.value.open()
								nextTick(() => {
									formModalRef.value.updateDataGroup(params.row)
								})
							}
						},
						() => '编辑'
					),
					h(
						ElButton,
						{
							type: 'danger',
							onClick: (e: any) => {
								e.stopPropagation()
								delData(params.row.id)
							}
						},
						() => '删除'
					)
				])
			}
		}
	])

	const formData = ref<any[]>([
		{
			type: 'input',
			label: '名称',
			key: 'name'
		},
		{
			type: 'input',
			label: '类型',
			key: 'mimeType'
		},
		{
			type: 'select',
			label: '后缀',
			key: 'extension',
			options: [
				{
					label: 'jpg',
					val: '.jpg'
				},
				{
					label: 'html',
					val: '.html'
				},
				{
					label: 'png',
					val: '.png'
				},
				{
					label: 'jpeg',
					val: '.jpeg'
				}
			]
		}
	])
	const formRules = ref<Record<string, any>>({
		name: {
			required: true
		},
		mimeType: {
			required: true
		},
		extension: {
			required: true
		}
	})

	/**
	 * 搜索
	 */
	const search = (data: object) => {
		searchData.value = cloneDeep(data)
	}
	const rowClick = (row: object) => {
		console.log(row)
	}
	/**
	 * 复选框选择回调
	 * @param selection
	 */
	const selectionChange = (selection: any[]) => {
		console.log(selection)
		selectIds.value = selection.map((item) => item.id)
	}
	/**
	 * 列表加载完成回调
	 */
	const onDataChange = () => {
		searchFormRef.value.changeLoading(false)
	}
	const addData = () => {
		formModalRef.value.open()
	}
	/**
	 * 删除数据
	 */
	const delData = (id?: any) => {
		let ids = ''
		if (isValidVal(id)) {
			ids = id
		} else {
			if (selectIds.value.length <= 0) {
				ElMessage.warning('请选择数据')
				return
			}
			ids = selectIds.value.join()
		}
		ElMessageBox.confirm('是否确认删除', '提示')
			.then(() => {
				$request
					.delete(store.serverUrl + '/bt-table', { ids })
					.then(() => {
						ElMessage.success('删除成功')
						tableRef.value.getTableData()
					})
					.catch()
			})
			.catch((e) => {
				console.log(e)
			})
	}
	/**
	 * 关闭弹框
	 */
	const onClose = () => {
		setTimeout(() => {
			formModalRef.value.resetForm()
			activeRow.value = {}
		}, 200)
	}
	/**
	 * 新增 or 编辑
	 */
	const onSubmit = (data: Record<string, any>) => {
		let method: 'post' | 'put' = 'post'
		if (activeRow.value.id) {
			method = 'put'
			data['id'] = activeRow.value.id
		}
		$request[method](store.serverUrl + '/bt-table', data, { isShowLoading: true })
			.then(() => {
				ElMessage.success(method === 'post' ? '新增成功' : '编辑成功')
				tableRef.value.getTableData()
				formModalRef.value.changeLoading(false)
				formModalRef.value.close()
				onClose()
			})
			.catch(() => {
				formModalRef.value.changeLoading(false)
			})
	}
	/**
	 * 导出Excel
	 */
	const exportJsonExcel = () => {
		const dataT = tableRef.value.dataT || []
		let column = columns.value.filter((e: any) => e.key)
		let header = column.map((e) => e.label)
		let headValue = column.map((e) => e.key)
		let data = dataT.map((v: any) => headValue.map((j) => v[j]))
		let filename = '表格数据'
		exportJsonToExcel({
			header,
			data,
			filename
		})
	}
	/**
	 * 导出zip
	 */
	const exportJsonZip = () => {
		const dataT = tableRef.value.dataT || []
		let column = columns.value.filter((e: any) => e.key)
		let header = column.map((e) => e.label)
		let headValue = column.map((e) => e.key)
		let data = dataT.map((v: any) => headValue.map((j) => v[j]))
		let filename = '表格数据'
		exportTxtToZip(header, data, filename)
	}
	/**
	 * 导出Excel
	 */
	const exportTableExcel = () => {
		exportTableToExcel(tableRef.value.$el.parentElement, 1, 4, '表格数据')
	}
</script>
<template>
	<div class="container">
		<el-card>
			<template #header>
				<div>分页表格</div>
			</template>
			<div class="table-container">
				<div class="app-search-table">
					<em-search-form ref="searchFormRef" :form-data="searchFormData" btnLoading @on-search="search">
						<template #beginBtnGroup>
							<el-button type="success" @click="addData()"> 新增</el-button>
							<el-button type="danger" :disabled="!(selectIds && selectIds.length > 0)" @click="delData()">
								删除
							</el-button>
						</template>
					</em-search-form>
					<div style="margin: 10px 0">
						<el-button type="primary" @click="exportTableExcel()"> TABLE导出Excel</el-button>
						<el-button type="warning" @click="exportJsonExcel()"> JSON导出Excel</el-button>
						<el-button type="warning" @click="exportJsonZip()"> zip导出</el-button>
					</div>
					<em-table-page
						ref="tableRef"
						selection
						:url="store.serverUrl + '/bt-table-page'"
						:columns="columns"
						:searchData="searchData"
						orderKey=""
						@row-click="rowClick"
						@selection-change="selectionChange"
						@on-data-change="onDataChange"
					/>
				</div>
			</div>
			<template #footer>
				<source-code-view :code="code1" />
			</template>
		</el-card>
		<em-form-modal
			ref="formModalRef"
			:title="activeRow.id ? '编辑' : '新增'"
			:form-data="formData"
			:form-rules="formRules"
			btnLoading
			@on-submit="onSubmit"
			@on-close="onClose"
		/>
	</div>
</template>
<style scoped lang="scss">
	.table-container {
		position: relative;
		height: 800px;
	}
</style>

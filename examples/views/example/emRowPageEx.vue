<script lang="ts" setup>
	import { EmSearchForm, EmTablePage, EmFormModal } from '../../../src'
	import { ElMessage, ElMessageBox, ElImage } from 'element-plus'
	import { cloneDeep } from 'lodash-es'
	import { exportTableToExcel, exportJsonToExcel, exportTxtToZip, $request, isValidVal } from '../../../src'
	import { useStore } from '@/store/main'

	defineOptions({
		name: 'emRowPageEx'
	})

	const store = useStore()
	let activeRow = ref<Record<string, any>>({})
	let searchData = ref<Record<string, any>>({})
	let selectIds = ref<any[]>([])
	let searchFormData = ref<any[]>([
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
			label: 'ID',
			render: (params: any) => {
				return h(ElImage, {
          style: {
            width: '100%',
            height: '200px',
          },
          src: window?._global?.serverImg + params.row.imgPath
        })
			}
		},
		{
			key: 'name',
			label: '名称'
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
	const searchFormRef = ref<any>()
	const formModalRef = ref<any>()
	const tableRef = ref<any>()

	/**
	 * 搜索
	 */
	const search = (data: Record<string, any>) => {
		searchData.value = cloneDeep(data)
	}
	const rowClick = (row: Record<string, any>) => {
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
	const delData = (id?: string | number) => {
		let ids: any = ''
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
			.catch((e) => {
				formModalRef.value.changeLoading(false)
			})
	}
	/**
	 * 导出Excel
	 */
	const exportJsonExcel = () => {
		const dataT = tableRef.value.dataT || []
		let column = columns.value.filter((e) => e.key)
		let header = column.map((e) => e.label)
		let headValue = column.map((e) => e.key)
		let data = dataT.map((v: Record<string, any>) => headValue.map((j) => v[j]))
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
		let column = columns.value.filter((e) => e.key)
		let header = column.map((e) => e.label)
		let headValue = column.map((e) => e.key)
		let data = dataT.map((v: Record<string, any>) => headValue.map((j) => v[j]))
		let filename = '表格数据'
		exportTxtToZip(header, data, filename, filename)
	}
	/**
	 * 导出Excel
	 */
	const exportTableExcel = () => {
		exportTableToExcel('tablePage', 1, 4, '表格数据')
	}
</script>

<template>
	<div class="app-container">
		<div class="app-search-table">
			<em-search-form ref="searchFormRef" :form-data="searchFormData" btnLoading @on-search="search">
				<template #beginBtnGroup>
					<el-button type="success" @click="addData()"> 新增</el-button>
					<el-button type="danger" :disabled="!(selectIds && selectIds.length > 0)" @click="delData()">
						删除
					</el-button>
					<el-button type="primary" @click="exportTableExcel()"> TABLE导出</el-button>
					<el-button type="warning" @click="exportJsonExcel()"> JSON导出</el-button>
					<el-button type="warning" @click="exportJsonZip()"> zip导出</el-button>
				</template>
			</em-search-form>
			<em-table-page
				id="tablePage"
				ref="tableRef"
				radio
				:url="store.serverUrl + '/bt-table-page'"
				:isTable="false"
				:row-gutter="15"
				:columns="columns"
				:searchData="searchData"
				orderKey=""
				@row-click="rowClick"
				@selection-change="selectionChange"
				@on-data-change="onDataChange"
			/>
		</div>
		<em-form-modal
			ref="formModalRef"
			:title="activeRow.id ? '编辑' : '新增'"
			:form-data="formData"
			:form-rules="formRules"
			btnLoading
			@on-submit="onSubmit"
			@on-close="onClose"
		>
		</em-form-modal>
	</div>
</template>
<style scoped lang="scss">
	.app-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: auto;
	}
</style>

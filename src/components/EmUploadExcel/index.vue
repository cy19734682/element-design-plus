<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import * as XLSX from 'xlsx'
  import { t } from '../../locale'
	import { ElMessage } from 'element-plus'

  defineOptions({
    name: 'EmUploadExcel'
  })

	const emit = defineEmits(['update:modelValue', 'on-name-change'])
	const props = withDefaults(
		defineProps<{
			beforeUpload?: Function //绑定值
			onSuccess?: Function //远程拉取数据的地址
		}>(),
		{}
	)

	const excelUploadInput = ref<any>()
	const loading = ref<boolean>(false)
	const excelData = ref<Record<string, any>>({
		header: null,
		results: null
	})

	const generateData = ({ header, results }:Record<string, any>) => {
		excelData.value.header = header
		excelData.value.results = results
		props.onSuccess && props.onSuccess(excelData.value)
	}

	const handleDrop = (e: any) => {
		e.stopPropagation()
		e.preventDefault()
		if (loading.value) {
			return
		}
		const files = e.dataTransfer.files
		if (files.length !== 1) {
			ElMessage.error('Only support uploading one file!')
			return
		}
		const rawFile = files[0] // only use files[0]

		if (!isExcel(rawFile)) {
			ElMessage.error('Only supports upload .xlsx, .xls, .csv suffix files')
			return false
		}
		upload(rawFile)
		e.stopPropagation()
		e.preventDefault()
	}
	const handleDragover = (e: any) => {
		e.stopPropagation()
		e.preventDefault()
		e.dataTransfer.dropEffect = 'copy'
	}
	const handleUpload = () => {
		excelUploadInput.value.click()
	}
	const handleClick = (e: any) => {
		const files = e.target.files
		const rawFile = files[0] // only use files[0]
		if (!rawFile) {
			return
		}
		upload(rawFile)
	}
	const upload = (rawFile: any) => {
		excelUploadInput.value.value = null // fix can't select the same excel

		if (!props.beforeUpload) {
			readerData(rawFile)
			return
		}
		const before = props.beforeUpload(rawFile)
		if (before) {
			readerData(rawFile)
		}
	}
	const readerData = (rawFile: any) => {
		loading.value = true
		return new Promise<void>((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = (e: any) => {
				const data = e.target.result
				const workbook = XLSX.read(data, { type: 'array' })
				const firstSheetName = workbook.SheetNames[0]
				const worksheet = workbook.Sheets[firstSheetName]
				const header = getHeaderRow(worksheet)
				const results = XLSX.utils.sheet_to_json(worksheet)
				generateData({
					header,
					results
				})
				loading.value = false
				resolve()
			}
			reader.readAsArrayBuffer(rawFile)
		})
	}
	const getHeaderRow = (sheet: any) => {
		const headers:any[] = []
		const range = XLSX.utils.decode_range(sheet['!ref'])
		let C
		const R = range.s.r
		/* start in the first row */
		for (C = range.s.c; C <= range.e.c; ++C) {
			/* walk every column in the range */
			const cell =
				sheet[
					XLSX.utils.encode_cell({
						c: C,
						r: R
					})
				]
			/* find the cell in the first row */
			if (cell && cell.t) {
				const hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
			}
		}
		return headers
	}
	const isExcel = (file: any) => {
		return /\.(xlsx|xls|csv)$/.test(file.name)
	}
</script>
<template>
	<div class="em_upload_excel">
		<input ref="excelUploadInput" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick" />
		<div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
			{{ t('em.dragExcel') }}
			<el-button :loading="loading" style="margin-left: 16px" type="primary" @click="handleUpload">
				{{ t('em.button.clickUpload') }}
			</el-button>
		</div>
	</div>
</template>

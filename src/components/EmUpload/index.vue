<script lang="ts" setup>
	import { ElDialog, ElUpload, ElButton, ElInput, ElIcon } from 'element-plus'
  import { t } from '../../locale'
	import { isArray } from 'lodash-es'
	import { imageSplicing, isValidVal } from '../../methods'
	import $request from '../../methods/request'
	import { ElMessage } from 'element-plus'
	import { Plus } from '@element-plus/icons-vue'

	defineOptions({
		name: 'EmUpload'
	})

	const emit = defineEmits(['update:modelValue', 'on-name-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | any[] | File //绑定值
			uploadFetch?: boolean //是否抓取网络图片上传
			url?: string //文件上传的地址
			paramData?: Record<string, any> //文件上传其它参数
			headers?: Record<string, any> //请求头额外参数
			fileName?: string //文件上传字段名
			autoUpload?: boolean //是否在选取文件后立即进行上传
			multiple?: boolean //是否支持多选
			format?: string[] //文件上传限制类型
			maxSize?: number //单个文件大小限制
			length?: number //文件上传数量限制
			listType?: 'text' | 'picture' | 'picture-card' //文件列表的类型
			withCredentials?: boolean //是否直接跨域
			disabled?: boolean //是否禁用
		}>(),
		{
			uploadFetch: false,
			url: (window?._global?.server || '') + '/upload',
			paramData: () => ({}),
			headers: () => ({}),
			fileName: 'file',
			autoUpload: true,
			multiple: false,
			format: () => [],
			maxSize: 0,
			length: 1,
			listType: 'text',
			withCredentials: true,
			disabled: false
		}
	)

	let dialogVisible = ref<boolean>(false) //预览弹窗是否展示
	let dialogImageUrl = ref<string>('') //预览图片url
	let fetchModalVisible = ref<boolean>(false) //网络图片抓取弹窗是否展示
	let fetchUrl = ref<string>('') //网络图片抓取弹窗是否展示
	let fileData = ref<any[]>([]) //文件上传数据
	let tempData = ref<any[]>([]) //临时上传数据

	const headersT = computed(() => {
		let header: Record<string, any> = {}
		if ($request?.config?.store?.getters?.token) {
			header = { 'x-oauth-token': $request.config.store.getters.token }
		}
		for (const key in props.headers) {
			header[key] = props.headers[key]
		}
		return header
	})

	watch(
		() => props.modelValue,
		(after: any) => {
			if (props.autoUpload && !props.uploadFetch) {
				//自动上传且不是网络抓取才需要处理数据
				let fileList: any[] = []
				if (after) {
					if (Array.isArray(after)) {
						for (let i = 0; i < after.length; i++) {
							fileList.push({
								name: after[i],
								url: imageSplicing(after[i])
							})
						}
					} else {
						fileList.push({
							name: after,
							url: imageSplicing(after)
						})
					}
				}
				fileData.value = fileList
			} else {
				let fileList: any[] = []
				if (isArray(after)) {
					fileList = after || []
				} else {
					fileList = (after && [after]) || []
				}
				fileData.value = fileList.map((e: any) => {
					if (e instanceof File) {
						let imageUrl = URL.createObjectURL(new Blob([e])) //赋值图片的url，用于图片回显功能
						return {
							name: e.name,
							url: imageUrl
						}
					} else {
						return {
							name: e,
							url: imageSplicing(e)
						}
					}
				})
			}
		},
		{
			deep: true,
			immediate: true
		}
	)

	/**
	 * 手动上传
	 * 手动上传不能触发beforeUpload事件，所以用on-change事件
	 */
	const handleChange = (file: any, fileList: any[]) => {
		if (props.autoUpload) {
			//自动上传有下面的钩子拦截，不需要这个函数判断
			return
		}
		if (file) {
			let type = file?.name?.split('.').pop().toLocaleLowerCase() || ''
			if (props.format.length > 0 && props.format.indexOf(type) < 0) {
				ElMessage.warning('文件类型只支持' + ((props.format.length > 0 && String(props.format)) || '无'))
				fileList.splice(fileList.length - 1, 1)
				return false
			}
			if (file && props.maxSize && file.size > props.maxSize) {
				ElMessage.warning('文件最大上传限制为' + (props.maxSize / 1024).toFixed(2) + 'kb')
				fileList.splice(fileList.length - 1, 1)
				return false
			}
		}
		emitFileChange(fileList.map((e) => e.raw))
	}
	/**
	 * 自动上传
	 * 上传文件前的钩子
	 * @param file
	 */
	const beforeUpload = (file: any) => {
		let type = file.name.split('.').pop().toLocaleLowerCase() || ''
		if (file && props.maxSize && file.size > props.maxSize) {
			ElMessage.warning('文件最大上传限制为' + (props.maxSize / 1024).toFixed(2) + 'kb')
			return false
		} else if (props.format.length > 0 && props.format.indexOf(type) < 0) {
			ElMessage.warning('文件类型只支持' + ((props.format.length > 0 && String(props.format)) || '无'))
			return false
		} else {
			return true
		}
	}
	/**
	 * 文件超出个数限制时的钩子
	 * @param files
	 * @param fileList
	 */
	const handleExceed = (files: any, fileList: any) => {
		ElMessage.warning('最多只能上传' + props.length + '个文件')
	}
	/**
	 * 自动上传
	 * 上传成功回调
	 * @param res
	 * @param file
	 */
	const handleUploadSuccess = (res: any, file: any) => {
		if (res?.code === 0) {
			let url = res.data
			tempData.value.push({
				uid: file.uid,
				name: file.name,
				url: url
			})
			emitFileChange(tempData.value.map((e: any) => e.url))
		} else {
			ElMessage.error(res?.msg || res?.message || '上传失败')
		}
	}
	/**
	 * 向父组件传值
	 * @param fileList
	 */
	const emitFileChange = (fileList: any[]) => {
		if (props.length > 1) {
			//返回数组
			emit('update:modelValue', fileList)
		} else {
			emit('update:modelValue', (fileList && fileList[0]) || null)
		}
	}
	/**
	 * 图片预览
	 * @param file
	 */
	const handlePreview = (file: any) => {
		let testRule = /\.(gif|jpg|jpeg|png|svg)$/i
		if (testRule.test(file.url) || testRule.test(file)) {
			//图片预览
			dialogVisible.value = true
			dialogImageUrl.value = file.url || file
		} else {
			//其它文件下载
			const a = document.createElement('a')
			a.style.display = 'none'
			a.setAttribute('target', '_blank')
			file.name && a.setAttribute('download', file.name)
			a.href = file.url
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		}
	}
	/**
	 * 移除上传文件
	 * @param file
	 * @param fileList
	 */
	const handleRemove = (file: any, fileList: any[]) => {
		if (file) {
			if (props.autoUpload) {
				//tempData中的uid和fileData中的不一致，所以这里使用fileData查询下标
				let _index = fileData.value.findIndex((e: any) => e.uid === file.uid)
				if (_index > -1) {
					tempData.value.splice(_index, 1)
					emitFileChange(tempData.value.map((e: any) => e.url))
				}
			} else {
				let _index = fileData.value.findIndex((e: any) => e.uid === file.uid)
				if (_index > -1) {
					fileData.value.splice(_index, 1)
					emitFileChange(fileData.value.map((e: any) => e.raw))
				}
			}
		}
	}
	/**
	 * 打开网络抓取弹窗
	 */
	const openFetchModal = () => {
		fetchModalVisible.value = true
		fetchUrl.value = ''
	}
	/**
	 * 提交网络资源地址
	 */
	const submitFetch = () => {
		if (!isValidVal(fetchUrl.value)) {
			ElMessage.warning('地址不能为空')
			return
		}
		$request
			.post(props.url, { url: fetchUrl.value, ...props.paramData }, { isShowLoading: true })
			.then((d: any) => {
        fileData.value = [d]
        emitFileChange(fileData.value.map((e: any) => e.url))
        ElMessage.success('上传成功')
        fetchModalVisible.value = false
			})
			.catch((e) => {
				console.warn(e)
			})
	}
	/**
	 * 移除网络资源地址
	 * @param e
	 * @param index
	 */
	const removeFetchImg = (e: any, index: number) => {
		e.stopPropagation()
		fileData.value.splice(index, 1)
		emitFileChange(fileData.value.map((e: any) => e.url))
	}
</script>
<template>
	<div class="em-upload">
		<div v-if="uploadFetch">
			<el-button size="small" type="primary" @click="openFetchModal">{{ t('em.button.clickUpload') }}</el-button>
			<div class="fetch-box">
				<div class="fetch-img" v-for="(item, index) in fileData" :key="index">
					<i class="el-icon-close" @click="removeFetchImg($event, index)" />
					<img :src="item" @click="handlePreview(item)" />
				</div>
			</div>
		</div>
		<el-upload
			v-else
			class="elm-uploader"
			:headers="headersT"
			:action="url"
			:data="paramData"
			:name="fileName"
			:list-type="listType"
			:file-list="fileData"
			:before-upload="beforeUpload"
			:on-change="handleChange"
			:on-success="handleUploadSuccess"
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:limit="length"
			:on-exceed="handleExceed"
			:auto-upload="autoUpload"
			:multiple="multiple"
			:with-credentials="withCredentials"
			:disabled="disabled"
		>
			<el-icon class="el-icon-plus" v-if="listType === 'picture-card'">
				<Plus />
			</el-icon>
			<el-button size="small" type="primary" v-else>{{ t('em.button.clickUpload') }}</el-button>
		</el-upload>
		<!-- 图片预览   -->
		<el-dialog :visible.sync="dialogVisible" style="z-index: 999" append-to-body>
			<img width="100%" :src="dialogImageUrl" alt="" />
		</el-dialog>
		<!--  网络图片抓取  -->
		<el-dialog title="网络地址" width="520px" :visible.sync="fetchModalVisible" append-to-body :show-close="false">
			<el-input class="wd70" v-model="fetchUrl" :placeholder="t('em.pInputFetchUrl')" />
			<div style="text-align: center; margin-top: 15px">
				<el-button type="primary" @click="submitFetch">{{ t('em.button.confirm') }}</el-button>
				<el-button @click="fetchModalVisible = false">{{ t('em.button.cancel') }}</el-button>
			</div>
		</el-dialog>
	</div>
</template>

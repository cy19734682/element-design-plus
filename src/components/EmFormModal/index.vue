<script lang="ts" setup>
  import {ElDialog , ElButton} from "element-plus"
  import { t } from '../../locale'
	import EmForm from '../EmForm/index.vue'

  defineOptions({
    name: 'EmFormModal'
  })

	const emit = defineEmits(['on-search', 'on-close'])
	const props = withDefaults(
		defineProps<{
			title?: string
			formData?: any[] //表单结构数据
			width?: string
			btnLoading?: boolean
			okBtTxt?: string
			cancelBtTxt?: string
		}>(),
		{
			formData: () => [],
			width: '750px',
			btnLoading: false
		}
	)

	let formModalRef = ref<any>()
	let openModal = ref<boolean>(false)
	let showLoading = ref<boolean>(false)
	const formDataC = computed(() => props.formData.filter((e: Record<string, any>) => e.type === 'custom'))

	/**
	 * 重置表单
	 * @returns {Promise<unknown>}
	 */
	const resetForm = () => {
		return new Promise<void>((resolve) => {
			formModalRef.value.resetForm().then(() => {
				resolve()
			})
		})
	}
	/**
	 * 重新渲染表单
	 * @returns {Promise<unknown>}
	 */
	const reRenderForm = () => {
		return new Promise<void>((resolve) => {
			formModalRef.value.reRenderForm().then(() => {
				resolve()
			})
		})
	}
	const updateDataGroup = (data: Record<string, any>, notClearOthers?: boolean) => {
		/*更新表单项的值（只能更新已有字段），公开*/
		formModalRef.value.updateDataGroup(data, notClearOthers)
	}
	const updateFormDataT = (data: Record<string, any>) => {
		/*更新表单结构，例如设置或取消禁用，公开*/
		formModalRef.value.updateFormDataT(data)
	}
	const changeLoading = (val?: boolean) => {
		/*改变弹框loading状态，私有*/
		showLoading.value = Boolean(val)
		formModalRef.value.changeLoading(val === undefined ? false : val)
	}
	const open = () => {
		/*触发打开弹框事件，公开*/
		openModal.value = true
	}
	const close = () => {
		/*触发关闭弹框事件，公开*/
		openModal.value = false
	}
	const onSubmit = () => {
		showLoading.value = true
	}
	const closeCb = () => {
		/*弹框关闭的回调事件*/
		emit('on-close')
		setTimeout(() => {
			showLoading.value = false
			formModalRef.value && formModalRef.value.changeLoading(false)
		}, 800)
	}
	const submit = () => {
		/*触发提交事件，公开*/
		formModalRef.value.submit()
	}

	defineExpose({
		resetForm,
		reRenderForm,
		updateDataGroup,
		updateFormDataT,
		changeLoading,
		open,
		close,
		submit
	})
</script>

<template>
	<el-dialog
		ref="dialogRef"
		:title="title || t('em.button.title')"
		v-model="openModal"
		:close-on-click-modal="false"
		append-to-body
		@close="closeCb"
		:width="width"
    top="5vh"
		class="em-form-modal"
	>
		<em-form ref="formModalRef" v-bind="$attrs" :form-data="formData" @on-submit="onSubmit">
			<template v-for="item in formDataC" #[item.slotName]="{ dataGroup }">
				<slot :name="item.slotName" :data-group="dataGroup" />
			</template>
		</em-form>
		<template #footer>
			<el-button type="primary" @click="submit" :loading="btnLoading && showLoading"
				>{{ okBtTxt || t('em.button.confirm') }}
			</el-button>
			<el-button @click="close">{{ cancelBtTxt || t('em.button.cancel') }}</el-button>
		</template>
	</el-dialog>
</template>

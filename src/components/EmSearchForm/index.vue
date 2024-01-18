<script lang="ts" setup>
  import { t } from '../../locale'
	import EmForm from '../EmForm/index.vue'
	import { cloneDeep } from 'lodash-es'
	import type { FormItem } from '../../public'
  import { Search, Refresh} from '@element-plus/icons-vue'

  defineOptions({
    name: 'EmSearchForm'
  })

	const emit = defineEmits(['on-search'])
	const props = withDefaults(
		defineProps<{
			formData?: FormItem[] //表单结构数据
			inlineOkBtTxt?: string
			inlineClearBtTxt?: string
			inlineOkBtIcon?: any
			inlineClearBtIcon?: any
      showBeginBtn?: boolean //是否展示开头标签
		}>(),
		{
			formData: () => [],
			inlineOkBtTxt: t('em.button.search'),
			inlineClearBtTxt: t('em.button.reset'),
			inlineOkBtIcon: Search,
			inlineClearBtIcon: Refresh,
      showBeginBtn: true
		}
	)

	const searchFormRef = ref<any>()
	const formDataT = ref<any[]>([])
	const formDataC = computed(() => {
    if(props.showBeginBtn){
      let startCustom:Record<string, any> = {
        type: 'custom',
        slotName: 'beginBtnGroup'
      }
      formDataT.value.unshift(startCustom)
    }
		return formDataT.value.filter((e) => e.type === 'custom')
	})

	/**
	 * 初始化表单结构（私有）*
	 */
	const initFormDataT = () => {
		formDataT.value = cloneDeep(props.formData)
	}
	/**
	 * 重置表单
	 * @returns {Promise<unknown>}
	 */
	const resetForm = () => {
		return new Promise<void>((resolve) => {
			searchFormRef.value.resetForm().then(() => {
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
			searchFormRef.value.reRenderForm().then(() => {
				resolve()
			})
		})
	}
	const updateDataGroup = (data: Record<string, any>, notClearOthers?: boolean) => {
		/*更新表单项的值（只能更新已有字段），公开*/
		searchFormRef.value.updateDataGroup(data, notClearOthers)
	}
	const updateFormDataT = (data: Record<string, any>) => {
		/*更新表单结构，例如设置或取消禁用，公开*/
		searchFormRef.value.updateFormDataT(data)
	}
	const changeLoading = (val?: boolean) => {
		/*改变弹框loading状态，私有*/
		searchFormRef.value.changeLoading(val === undefined ? false : val)
	}
	const onSubmit = (data: Record<string, any>) => {
		/*响应提交事件提交数据，私有*/
		emit('on-search', data)
	}
	const submit = () => {
		/*触发提交事件，公开*/
		searchFormRef.value.submit()
	}

	initFormDataT()

	defineExpose({
		resetForm,
		reRenderForm,
		updateDataGroup,
		updateFormDataT,
		changeLoading,
		onSubmit,
		submit
	})
</script>
<template>
	<div class="search-container">
		<em-form
			ref="searchFormRef"
			v-bind="$attrs"
			:form-data="formDataT"
			inline
			show-inline-ok-bt
			show-inline-clear-bt
			:inline-ok-bt-txt="inlineOkBtTxt"
			:inline-clear-bt-txt="inlineClearBtTxt"
			:inline-ok-bt-icon="inlineOkBtIcon"
			:inline-clear-bt-icon="inlineClearBtIcon"
			@on-submit="onSubmit"
		>
			<template #[item.slotName]="{ dataGroup }" v-for="item in formDataC">
				<slot :name="item.slotName" :data-group="dataGroup" />
			</template>
		</em-form>
	</div>
</template>

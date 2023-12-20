<script lang="ts" setup>
	import EmForm from '../EmForm/index.vue'

  defineOptions({
    name: 'EmFormGroup'
  })

	const emit = defineEmits(['on-search'])
	const props = withDefaults(
		defineProps<{
			formData?: any[] //表单结构数据
		}>(),
		{
			formData: () => []
		}
	)

	let formGroupRef = ref<any>()
	const formDataC = computed(() => props.formData.filter((e: Record<string, any>) => e.type === 'custom'))

	/**
	 * 重置表单
	 * @returns {Promise<unknown>}
	 */
	const resetForm = () => {
		return new Promise<void>((resolve) => {
			formGroupRef.value.resetForm().then(() => {
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
			formGroupRef.value.reRenderForm().then(() => {
				resolve()
			})
		})
	}
	const updateDataGroup = (data: Record<string, any>, notClearOthers?: boolean) => {
		/*更新表单项的值（只能更新已有字段），公开*/
		formGroupRef.value.updateDataGroup(data, notClearOthers)
	}
	const updateFormDataT = (data: Record<string, any>) => {
		/*更新表单结构，例如设置或取消禁用，公开*/
		formGroupRef.value.updateFormDataT(data)
	}
	const changeLoading = (val?: boolean) => {
		/*改变弹框loading状态，私有*/
		formGroupRef.value.changeLoading(val === undefined ? false : val)
	}
	const onSubmit = (data: Record<string, any>) => {
		/*响应提交事件提交数据，私有*/
		emit('on-search', data)
	}
	const submit = () => {
		/*触发提交事件，公开*/
		formGroupRef.value.submit()
	}

	defineExpose({
		resetForm,
		reRenderForm,
		updateDataGroup,
		updateFormDataT,
		changeLoading,
		submit
	})
</script>
<template>
	<div class="form-group-container">
		<em-form
			ref="formGroupRef"
			v-bind="$attrs"
			:form-data="formData"
			show-inline-ok-bt
			show-inline-clear-bt
			@on-submit="onSubmit"
		>
			<template v-for="item in formDataC" #[item.slotName]="{ dataGroup }">
        <slot :name="item.slotName" :data-group="dataGroup" />
			</template>
		</em-form>
	</div>
</template>

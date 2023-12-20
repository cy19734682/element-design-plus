<script lang="ts" setup>
  import { ElCascader } from 'element-plus'
  import { t } from '../../locale'
	import { cloneDeep, isNumber, isString, last } from 'lodash-es'
	import { provinceAndCityData, regionData, codeToText } from 'element-china-area-data'

  defineOptions({
    name: 'EmCascaderArea'
  })

	const emit = defineEmits(['update:modelValue', 'on-name-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | any[] //绑定值
			level?: number //精确至几级行政区域（省级，1：省市级，2：省市区）
			showAllLevels?: boolean //是否显示完整路径
			separator?: string //地址名称分隔符
			size?: 'large' | 'default' | 'small' //大小
			filterable?: boolean //是否可搜索
			disabled?: boolean //是否禁用
			placeholder?: string //占位符
		}>(),
		{
			level: 2,
			showAllLevels: true,
			separator: '/',
			size: 'default',
			filterable: true,
			disabled: false
		}
	)

	const options = ref<any[]>([]) //选项值列表

	const valueT = computed({
		get() {
			if (props.modelValue && (isNumber(props.modelValue) || isString(props.modelValue))) {
				let temp = String(props.modelValue).trim()
				let regP = /^\d*$/
				if (regP.test(temp)) {
					let lv1 = temp.substr(0, 2)
					let lv2 = temp.substr(0, 4)
					if (props.level === 1) {
						return [lv1, lv2]
					}
					return [lv1, lv2, temp]
				}
				if (temp.indexOf(props.separator) !== -1) {
					/*以中文名称和分隔符拼接的String地址*/
					return temp.split(props.separator)
				}
				return [temp]
			} else if (Array.isArray(props.modelValue)) {
				return cloneDeep(props.modelValue)
			} else {
				return []
			}
		},
		set(val: any) {
      val = val || []
			let code: any = null
			let name: any = null
			if (Array.isArray(val)) {
				name = val
					.map((item) => {
						return item.name
					})
					.join(props.separator)
			}
			if (Array.isArray(props.modelValue)) {
				code = val
				name = val.map((item: any) => {
					return codeToText[item]
				})
			} else {
				code = last(val)
				name = codeToText[code]
			}
			emit('update:modelValue', code)
			emit('on-name-change', name)
		}
	})

	watch(
		() => props.level,
		(after: number) => {
			if (after === 1) {
				options.value = provinceAndCityData
			} else if (after === 2) {
				options.value = regionData
			}
		},
		{
			deep: true,
			immediate: true
		}
	)
</script>
<template>
	<el-cascader
		v-bind="$attrs"
		ref="areaRef"
		v-model="valueT"
		:options="options"
		:show-all-levels="showAllLevels"
		:size="size"
		:disabled="disabled"
		:placeholder="placeholder || t('em.pSelect')"
		:filterable="filterable"
		clearable
	/>
</template>

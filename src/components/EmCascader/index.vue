<script lang="ts" setup>
  import { ElCascader } from 'element-plus'
  import { t } from '../../locale'
	import { cloneDeep, isEmpty, isNumber, isString, last } from 'lodash-es'
	import { myTypeof, findPath } from '../../methods'
	import $request from '../../methods/request'

  defineOptions({
    name: 'EmCascader'
  })

	const emit = defineEmits(['update:modelValue', 'on-name-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | any[] //绑定值
			url?: string //远程拉取数据的地址
			data?: any[] //静态数据
			optionVal?: string //收集节点的哪些字段
			optionLabel?: string //选项的标签对应接口字段
			optionFilter?: <T>(d: T[]) => T[] //筛选待选项的方法，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）
			showAllLevels?: boolean //是否显示完整路径
			separator?: string //地址名称分隔符
			size?: 'large' | 'default' | 'small' //大小
			filterable?: boolean //是否可搜索
			checkStrictly?: boolean //任意一级选项
			multiple?: boolean //是否多选
			disabled?: boolean //是否禁用
			placeholder?: string //占位符
		}>(),
		{
			data: () => [],
			optionVal: 'id',
			optionLabel: 'name',
			showAllLevels: true,
			separator: '/',
			size: 'default',
			filterable: true,
			checkStrictly: false,
			multiple: false,
			disabled: false
		}
	)

	const options = ref<any[]>([]) //选项值列表

	const valueT = computed({
		get() {
			let valProp = props.modelValue
			if (Array.isArray(valProp)) {
				return cloneDeep(valProp)
			} else if (isNumber(valProp)) {
				return findPath({
					group: options.value,
					condition: (item) => item.value === valProp,
					pathKey: 'value'
				})
			} else if (isString(valProp)) {
				return valProp.split(props.separator)
			} else if (valProp === null) {
				return []
			}
		},
		set(val: any) {
      val = val || []
			let labels = findPath({
				group: options.value,
				condition: (item) => item.value === val[val.length - 1],
				pathKey: 'label'
			})
			let v: any = null
			let l: any = null
			if (Array.isArray(props.modelValue)) {
				v = val
				l = labels
			} else {
				v = last(val)
				l = labels[labels.length - 1]
			}
			emit('update:modelValue', v)
			emit('on-name-change', l)
		}
	})

  /**
   * 数据过滤
   * @param data
   */
  const dataFilter = (data: any[]) => {
    let temp: any[] = []
    for (let item of data) {
      let tt: Record<string, any> = {
        value: item[props.optionVal],
        label: item[props.optionLabel]
      }
      if (item.children && !isEmpty(item.children)) {
        tt.children = dataFilter(item.children)
      }
      temp.push(tt)
    }
    return temp
  }

	watch(
		() => props.data,
		(after: any) => {
			if (after && after.length > 0) {
				options.value = dataFilter(after)
			}
		},
		{
			deep: true,
			immediate: true
		}
	)

	/**
	 * 拉取数据
	 */
	const getData = () => {
		if (props.url && props.url !== '') {
			$request
				.get(props.url)
				.then((d: any) => {
					if (d?.code === 0) {
						let data = d?.data || []
						if (typeof props.optionFilter === 'function' && myTypeof(props.optionFilter) === 'Function') {
							data = props.optionFilter(data)
						}
						options.value = dataFilter(data)
					}
				})
				.catch((e) => {
					console.warn(e)
				})
		}
	}

	onMounted(getData)
</script>
<template>
	<el-cascader
		v-bind="$attrs"
		ref="areaRef"
		v-model="valueT"
		:options="options"
		:props="{
			checkStrictly: checkStrictly,
			multiple: multiple
		}"
		:show-all-levels="showAllLevels"
		:size="size"
		:disabled="disabled"
		:placeholder="placeholder || t('em.pSelect')"
		:filterable="filterable"
		clearable
	/>
</template>

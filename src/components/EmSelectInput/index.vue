<script lang="ts" setup>
	import { ElInput, ElSelect, ElOption } from 'element-plus'
  import { t } from '../../locale'
	import { debounce } from 'lodash-es'
	import { myTypeof } from '../../methods'
	import $request from '../../methods/request'

	defineOptions({
		name: 'EmSelectInput'
	})

	const emit = defineEmits(['update:modelValue', 'on-change'])
	const props = withDefaults(
		defineProps<{
			modelValue?: Record<string, any> //绑定值
			url?: string //远程拉取数据的地址
			data?: any[] //静态数据
			selectWidth?: string //select选择框宽度
			optionVal?: string //v-model收集节点的哪些字段
			optionLabel?: string //选项的标签对应接口字段
			optionFilter?: <T>(d: T[]) => T[] //筛选待选项的方法，入参是接口请求回来的待选项数据，返回处理后的待选项（仅进行筛选操作，不要做其它处理）
			filterable?: boolean //是否可搜索
			disabled?: boolean //是否禁用
			selectPlaceholder?: string //选择框占位符
			inputPlaceholder?: string //输入框占位符
		}>(),
		{
			modelValue: () => ({
				key: null,
				val: null
			}),
			data: () => [],
			selectWidth: '120px',
			optionVal: 'val',
			optionLabel: 'label',
			filterable: true,
			disabled: false
		}
	)

	const options = ref<any[]>([]) //选项值列表
	const selectVal = computed({
		get() {
			return props?.modelValue?.key || null
		},
		set(val: any) {
			let temp: Record<string, any> = {
				key: val,
				val: null
			}
			if (selectVal.value && selectVal.value !== val) {
				temp.beforeKey = selectVal.value
			}
			emit('update:modelValue', temp)
			emit('on-change', temp)
		}
	})
	const inputVal = computed({
		get() {
			return props?.modelValue?.val || null
		},
		set(val: any) {
			let temp = {
				key: selectVal.value,
				val: val
			}
			emit('update:modelValue', temp)
		}
	})

	/**
	 * 数据过滤
	 */
	const dataFilter = (data: any) => {
		let temp: any[] = []
		for (let item of data) {
			let tt = {
				value: item[props.optionVal],
				label: item[props.optionLabel]
			}
			temp.push(tt)
		}
		return temp
	}

	watch(
		() => props.data,
		(after: any[]) => {
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
          let data = d || []
          if (typeof props.optionFilter === 'function' && myTypeof(props.optionFilter) === 'Function') {
            data = props.optionFilter(data)
          }
          options.value = dataFilter(data)
				})
				.catch((e) => {
					console.warn(e)
				})
		}
	}
	/**
	 * input输入响应
	 */
	const inputChange = debounce(function (e) {
		emit('on-change', {
			key: selectVal.value,
			val: e
		})
	}, 200)

	onMounted(getData)
</script>
<template>
	<el-input
		v-bind="$attrs"
		v-model="inputVal"
		class="em-input-with-select input-with-select"
		clearable
		:placeholder="inputPlaceholder || t('em.pInput')"
		:disabled="disabled"
		@change="inputChange"
	>
		<template #prepend>
			<el-select
				v-model="selectVal"
				:placeholder="selectPlaceholder || t('em.pSelect')"
				:style="{ width: selectWidth + '!important' }"
				clearable
				:filterable="filterable"
				:disabled="disabled"
			>
				<el-option
					v-for="(item, index) in options"
					:key="'selectInput' + index"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
		</template>
	</el-input>
</template>

<script lang="ts" setup>
	import { ElPopover, ElForm, ElFormItem, ElSelect, ElOption, ElButton, ElInput, ElIcon, ElTag } from 'element-plus'
	import { Search, Refresh, CircleClose, ArrowUp, ArrowDown } from '@element-plus/icons-vue'
	import { t } from '../../locale'
	import { cloneDeep, isEmpty, isArray } from 'lodash-es'
	import EmTablePage from '../EmTablePage/index.vue'

	defineOptions({
		name: 'EmTableSelect'
	})

	const emit = defineEmits(['update:modelValue'])
	const props = withDefaults(
		defineProps<{
			modelValue: string | number | any[] //绑定值
			url?: string //远程拉取数据的地址
			searchForm?: any[] //搜索条件
			columns?: any[] //表格列数据
			pageSize?: number //查询数量
			width?: number //表格宽度
			multiple?: boolean //是否多选
			valKey?: string //绑定值的key
			labelKey?: string //展示值的key
			placeholder?: string //占位符
			placement?:
				| 'top'
				| 'right'
				| 'left'
				| 'auto'
				| 'bottom'
				| 'auto-start'
				| 'auto-end'
				| 'top-start'
				| 'top-end'
				| 'bottom-start'
				| 'bottom-end'
				| 'right-start'
				| 'right-end'
				| 'left-start'
				| 'left-end' //弹出位置
			disabled?: boolean //是否禁用
		}>(),
		{
			searchForm: () => [],
			columns: () => [],
			pageSize: -1,
			width: 500,
			multiple: false,
			valKey: 'id',
			labelKey: 'name',
			placeholder: t('em.pSelect'),
			placement: 'bottom',
			disabled: false
		}
	)

	const tableRef = ref<any>()
	const inputRef = ref<any>()
	const tagsRef = ref<any>()
	const tablePopoverRef = ref<any>()
	let initialInputHeight: number = 36 //input默认高度
	let inputRefHeight = ref<string>('36px') //input高度
	let dataList = ref<any[]>([])
	let visible = ref<boolean>(false) // 弹出框显示
	let queryParams = ref<Record<string, any>>({}) //表单搜索数据
	let searchData = ref<Record<string, any>>({}) //列表触发查询数据
	let rowSelectFlag = ref<boolean>(false)
	let delTagFlag = ref<boolean>(false)

	const valueT = computed({
		get() {
			if (props.multiple && isArray(props.modelValue)) {
				//多选
				if (props.modelValue && dataList.value) {
					return (
						dataList.value.filter(
							(e: Record<string, any>) =>
								(props.modelValue as any[]).filter((x: Record<string, any>) => e[props.valKey] === x).length > 0
						) || []
					)
				} else {
					return []
				}
			} else {
				if (props.modelValue && dataList.value) {
					return dataList.value.find((e) => e[props.valKey] === props.modelValue) || {}
				} else {
					return {}
				}
			}
		},
		set(val) {
			emit('update:modelValue', val)
		}
	})
	const showClose = computed(() => !isEmpty(valueT.value))
	const currentPlaceholder = computed(() => {
		if (props.multiple) {
			return isEmpty(valueT.value) ? props.placeholder : ''
		} else {
			return props.placeholder
		}
	})

	watch(
		() => props.searchForm,
		(after: any[]) => {
			if (after && after.length) {
				let param: Record<string, any> = {}
				after.forEach((e) => {
					param[e.key] = null
				})
				queryParams.value = param
			}
		},
		{
			immediate: true
		}
	)

	/**
	 * 多选时重置输入框高度
	 */
	const resetInputHeight = () => {
		nextTick(() => {
			setTimeout(() => {
				if (!inputRef.value || !tagsRef.value) {
					return
				}
				const tags = tagsRef.value
				const height =
					tags.clientHeight > initialInputHeight.toFixed() ? tags.clientHeight + 6 : initialInputHeight.toFixed()
				inputRefHeight.value = height + 'px'
			}, 10)
		})
	}

	watch(
		() => valueT.value,
		(after: any) => {
			if (props.multiple) {
				//多选才需要修改高度
				rowSelectFlag.value = true
				nextTick(() => {
					if (!visible.value && !delTagFlag.value) {
						if (!isEmpty(after)) {
							after.forEach((item: Record<string, any>) => {
								tableRef.value.handleRowClick(item)
							})
						} else {
							tableRef.value.handleClearSelection()
						}
					}
					rowSelectFlag.value = false
					delTagFlag.value = false
				})
				resetInputHeight()
			} else {
				nextTick(() => {
					tableRef.value.onlyId = after[props.valKey]
				})
			}
		},
		{
			immediate: true
		}
	)

	const handleRowClick = (row: Record<string, any>) => {
		if (!props.multiple) {
			//单选
			valueT.value = row[props.valKey]
			visible.value = false
		}
	}
	/**
	 * 多选事件选择回调
	 * @param selection
	 */
	const selectionChange = (selection: any[]) => {
		if (props.multiple) {
			//多选
			if (rowSelectFlag.value) {
				return
			}
			valueT.value = selection.map((e) => e[props.valKey])
		}
	}
	/**
	 * 点击清空按钮触发
	 * @param event
	 */
	const handleClearClick = (event: any) => {
		event.stopPropagation()
		if (props.multiple) {
			//多选
			tableRef.value.handleClearSelection()
		} else {
			valueT.value = null
		}
	}
	/**
	 * 删除标签
	 * @param event
	 * @param item
	 */
	const deleteTag = (event: any, item: Record<any, string>) => {
		event.stopPropagation()
		delTagFlag.value = true
		tableRef.value.handleRowClick(item)
	}

	/**
	 * 搜索
	 * @returns {Promise<void>}
	 */
	const search = () => {
		searchData.value = cloneDeep(queryParams.value)
	}

	/**
	 * 重置搜索
	 */
	const handleReset = () => {
		for (let key in queryParams.value) {
			queryParams.value[key] = null
		}
		search()
	}

	/**
	 * 列表加载完成回调
	 */
	const onDataChange = () => {
		dataList.value = tableRef.value.dataS
	}
</script>
<template>
	<div class="em-table-select">
		<!-- 弹出框 -->
		<el-popover
			ref="tablePopoverRef"
			v-model:visible="visible"
			:placement="placement"
			:width="width"
			popper-class="cat-table-popover"
			virtual-triggering
			trigger="click"
			:disabled="disabled"
		>
			<!--搜索栏-->
			<el-form v-if="searchForm && searchForm.length > 0" ref="queryFormRef" size="small" :model="queryParams" inline>
				<el-form-item v-for="(item, index) in searchForm" :key="index">
					<el-input v-if="item.type === 'input'" v-model="queryParams[item.key]" :placeholder="item.label" clearable />
					<el-select
						v-else-if="item.type === 'select'"
						v-model="queryParams[item.key]"
						:placeholder="item.label"
						clearable
						:filterable="item.filterable || true"
						:multiple="item.multiple || false"
					>
						<el-option
							v-for="optionItem in item.options"
							:key="'selectItem' + optionItem.val"
							:label="optionItem.label"
							:value="optionItem.val"
							:disabled="!!optionItem.disabled"
						/>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" :icon="Search" @click="search">{{ t('em.button.search') }}</el-button>
					<el-button :icon="Refresh" @click="handleReset">{{ t('em.button.reset') }}</el-button>
				</el-form-item>
			</el-form>
			<!--表格-->
			<em-table-page
				ref="tableRef"
				v-bind="$attrs"
				:selection="multiple"
				:radio="!multiple"
				:url="url"
				:columns="columns"
				pageLayout="prev, pager, next"
				:searchData="searchData"
				@row-click="handleRowClick"
				@selection-change="selectionChange"
				@on-data-change="onDataChange"
				:show-page="false"
				:page-size="pageSize"
				orderKey=""
			/>
		</el-popover>
		<!-- 标签显示（多选） -->
		<div
			ref="tagsRef"
			v-if="multiple"
			class="cat-table-select__tags"
			:style="{ 'max-width': 'calc(100% - 65px)', width: '100%' }"
		>
			<transition-group v-if="valueT && valueT.length">
				<el-tag
					v-for="(item, index) in valueT"
					:key="'tag-' + index"
					size="small"
					type="info"
					:closable="!disabled"
					@close="deleteTag($event, item)"
					disable-transitions
				>
					<span class="cat-table-select__tags-text">{{ item[labelKey] }}</span>
				</el-tag>
			</transition-group>
		</div>
		<!-- 输入框 -->
		<el-input
			ref="inputRef"
			:class="{ 'is-focus': visible }"
			v-popover="tablePopoverRef"
			v-model="valueT[labelKey]"
			type="text"
			:placeholder="currentPlaceholder"
			readonly
			:disabled="disabled"
			class="wd100"
			:input-style="{ width: '100%', height: inputRefHeight }"
		>
			<template #suffix>
				<el-icon v-if="showClose && !disabled" @click="handleClearClick" class="el-select__caret el-input__icon">
					<CircleClose />
				</el-icon>
				<el-icon class="el-select__caret el-input__icon">
					<ArrowDown v-show="visible" />
					<ArrowUp v-show="!visible" />
				</el-icon>
			</template>
		</el-input>
	</div>
</template>

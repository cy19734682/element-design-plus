<script lang="ts" setup>
	import { ElTable, ElTableColumn, ElRow, ElCol, ElRadio, ElCheckbox, ElEmpty, ElPagination } from 'element-plus'
  import { t } from '../../locale'
	import { scrollTo } from '../../methods/scroll-to'
	import $request from '../../methods/request'

	defineOptions({
		name: 'EmTablePage'
	})

	const emit = defineEmits(['on-data-change'])

	const renderDom = defineComponent({
		name: 'renderDom',
		functional: true,
		props: {
			row: Object,
			render: Function,
			index: Number,
			column: {
				type: Object,
				default: null
			}
		},
		setup: (context: any) => {
			return context.render
		}
	})

	const props = withDefaults(
		defineProps<{
			initData?: boolean //是否初始化数据，即组件创建后自动拉取第一次数据
			isTable?: boolean //是否是表格
			url?: string //表格拉取数据的接口地址
			searchData?: Record<string, any> //表格条件查询数据
			columns?: any[] //表格表头结构数据，同Element-ui
			data?: any[] //表格默认数据，没有url的本地静态表格使用
			tableAlign?: string //表格对齐方式
			showOverflowTooltip?: boolean //当内容过长被隐藏时显示 tooltip
			tableEmptyTdHandle?: boolean //表格内容为空时是否展示 --
			selection?: boolean //是否展示每列开头复选框
			radio?: boolean //是否展示每列开头复选框
			loading?: boolean //拉取表格数据时显示遮罩层
			defaultId?: string //默认id的key
			orderKey?: string //排序的key
			orderDefault?: 'asc' | 'desc' //排序是升是降
			showPage?: boolean //是否展示页签
			pageLayout?: string //分页布局
			pageSize?: number //每页条数
			pageSizes?: number[] //每页显示个数选择器的选项设置
			currentPageKey?: string //分页当前页码key
			pageSizeKey?: string //每页显示条目个数key
			totalKey?: string //总条目数key
			rowGutter?: number //栅格间隔（非表格）
			rowJustify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' //flex 布局下的水平排列方式（非表格）
			rowAlign?: 'top' | 'middle' | 'bottom' //flex 布局下的垂直排列方式（非表格）
			rowSpan?: number //栅格占据的列数（非表格）
			rowBorderColor?: string //单选时表格边框颜色（非表格）
		}>(),
		{
			initData: true,
			isTable: true,
			searchData: () => ({}),
			columns: () => [],
			data: () => [],
			tableAlign: 'center',
			showOverflowTooltip: true,
			tableEmptyTdHandle: true,
			selection: false,
			radio: false,
			loading: false,
			defaultId: 'id',
			orderKey: 'id',
			orderDefault: 'desc',
			showPage: true,
			pageLayout: 'total, sizes, prev, pager, next, jumper',
			pageSize: 10,
			pageSizes: () => [10, 20, 30, 40, 50, 100],
			currentPageKey: 'current',
			pageSizeKey: 'size',
			totalKey: 'total',
			rowGutter: 4,
			rowJustify: 'start',
			rowSpan: 6,
			rowBorderColor: '#409eff'
		}
	)

	const elTableRef = ref<any>()
	let currentPage = ref<number>(1) //当前页面
	let pageSizeT = ref<number>(props.pageSize) //每页条数
	let total = ref<number>(0) //查询记录总数
	let dataT = ref<any[]>(props.data) //数据
	let selected = ref<any[]>([]) //多选选择值
	let onlyId = ref<string>('') // 单选选择的id

	const queryData = computed(() => {
		let temp: Record<string, any> = {
			...props.searchData,
			[props.currentPageKey]: currentPage.value,
			[props.pageSizeKey]: pageSizeT.value
		}
		if (props.orderKey && props.orderDefault) {
			temp[props.orderKey] = props.orderDefault
		}
		return temp
	})
	const columnsT = computed(() => {
		return props.columns.map((item: Record<string, any>) => {
			item['key'] = item['key'] || ''
			return item
		})
	})
	const dataS: WritableComputedRef<{ [p: string]: any; rowKey: string }[]> = computed({
		get() {
			return dataT.value.map((e: Record<string, any>, i: number) => {
				return {
					rowKey: 'bt-' + i,
					...e
				}
			})
		},
		set(v) {
			dataT.value = v
		}
	})
	const selectedIds = computed(() => selected.value.map((e: Record<string, any>) => e[props.defaultId]))

	watch(
		() => props.searchData,
		() => {
			currentPage.value = 1
			getTableData()
		},
		{
			deep: true
		}
	)

	/**
	 * 列表单机事件
	 * @param row
	 * @param index
	 */
	const handleRowClick = (row: Record<string, any>, index?: number) => {
		if (props.radio) {
			onlyId.value = row[props.defaultId]
		}
		if (props.selection) {
			if (props.isTable) {
				elTableRef.value.toggleRowSelection(row)
			} else {
				row.check = !Boolean(row.check)
				dataT.value[index || 0] = row
				let _index = selected.value.findIndex((e: Record<string, any>) => e[props.defaultId] === row[props.defaultId])
				if (_index > -1) {
					selected.value.splice(_index, 1)
				} else {
					selected.value.push(row)
				}
			}
		}
	}
	/**
	 * 清空多选(公开)
	 */
	const handleClearSelection = () => {
		if (props.isTable) {
			elTableRef.value.clearSelection()
		} else {
			selected.value = []
		}
	}
	/**
	 * 列表复选框选择事件,返回所有选中数据
	 * @param rows
	 */
	const handleSelectionChange = (rows: any[]) => {
		if (props.selection) {
			selected.value = rows
		}
	}
	/**
	 * 清空选择
	 */
	const clearSelect = () => {
		if (props.radio) {
			onlyId.value = ''
		}
		if (props.selection) {
			if (props.isTable) {
				elTableRef.value.clearSelection()
			} else {
				selected.value = []
			}
		}
	}

	/**
	 * 切换分页
	 */
	const changePage = () => {
		scrollTo(0, 800)
		getTableData()
	}

	/**
	 * 清空表格数据
	 */
	const clearTableData = () => {
		dataT.value = []
		clearSelect()
		currentPage.value = 1
		total.value = 0
	}

	/**
	 * 拉取表格数据并且点击行
	 */
	const getDataAndClickRow = (val: string) => {
		if (val) {
			getTableData().then(() => {
				if (dataT.value.length > 0) {
					setTimeout(() => {
						let row = dataT.value.find((e: Record<string, any>) => e[props.defaultId] === val)
						if (row) {
							handleRowClick(row)
							elTableRef.value.setCurrentRow(row)
						}
					}, 10)
				}
			})
		} else {
			getTableData()
		}
	}

	/**
	 * 拉取表格数据
	 * @param keepSelect
	 */
	const getTableData = (keepSelect: boolean = false) => {
		return new Promise<void>((resolve) => {
			if (props.url && props.url !== '') {
				$request
					.get(props.url, queryData.value, { isShowLoading: props.loading })
					.then((d: any) => {
						if (!keepSelect) {
							clearSelect()
						}
						if (d?.code === 0 && d?.data) {
							dataT.value = d?.data?.data || d?.data || []
							total.value = d.data[props.totalKey] || 0
						} else {
							clearTableData()
						}
						emit('on-data-change', d)
						resolve(d)
					})
					.catch((e) => {
						console.warn(e)
						emit('on-data-change', e)
					})
			} else {
				console.warn('没有有效的请求地址，无法获取表格数据')
			}
		})
	}

	onMounted(() => {
		if (props.initData) {
			getTableData()
		}
	})

	defineExpose({
    dataT,
		dataS,
		selectedIds,
		handleRowClick,
		getDataAndClickRow,
		handleClearSelection,
		clearTableData,
		getTableData
	})
</script>

<template>
	<div class="table-container">
		<!--  表格   -->
		<el-table
			v-if="isTable"
			v-bind="$attrs"
			v-loading="loading"
			id="dataTable"
			ref="elTableRef"
			:data="dataS"
			:reserve-selection="selection"
			@selection-change="handleSelectionChange"
			@row-click="handleRowClick"
			:header-cell-style="{ backgroundColor: '#f1f1f1' }"
		>
			<!--多选框-->
			<el-table-column v-if="selection" type="selection" width="50" align="center"></el-table-column>
			<!--单选框-->
			<el-table-column v-if="radio" width="50" align="center">
				<template #default="scope">
					<el-radio :label="scope.row[defaultId]" v-model="onlyId"><span></span></el-radio>
				</template>
			</el-table-column>
			<el-table-column
				v-for="(item, index) in columnsT"
				:key="item.key + index"
				:type="item.type"
				:prop="item.key"
				:label="item.label"
				:width="item.width"
				:min-width="item.minWidth"
				:fixed="item.fixed"
				:header-align="item.headerAlign"
				:align="item.align || tableAlign"
				:formatter="item.formatter"
				:show-overflow-tooltip="showOverflowTooltip"
			>
				<template #header>
					<span>{{ item.label }}</span>
				</template>
				<template #default="scope">
					<render-dom v-if="item.render" :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
					<span
						v-else-if="
							tableEmptyTdHandle &&
							(scope.row[item.key] === '' || scope.row[item.key] === null || scope.row[item.key] === undefined)
						"
						>--</span
					>
					<span v-else>{{ scope.row[item.key] }}</span>
				</template>
			</el-table-column>
		</el-table>
		<!--  栅格模式   -->
		<el-row v-else :gutter="rowGutter" :justify="rowJustify" :align="rowAlign">
			<template v-if="dataS && dataS.length > 0">
				<el-col
					v-for="(item, _index) in dataS"
					:key="item[defaultId]"
					:span="rowSpan"
					@click.native="handleRowClick(item, _index)"
				>
					<div
						style="border: 2px solid transparent"
						:style="[
							{ 'border-color': radio && item[defaultId] === onlyId ? rowBorderColor : 'transparent' },
							{ cursor: radio || selection ? 'pointer' : 'inherit' }
						]"
					>
						<el-checkbox
							v-model="item.check"
							v-if="selection"
							style="position: absolute"
							@click.native.prevent="() => {}"
						/>
						<div v-for="(c_item, index) in columnsT" :key="c_item.key + index">
							<render-dom v-if="c_item.render" :render="c_item.render" :row="item" :index="index" :column="c_item" />
							<div class="row-sda" :class="'sl-' + index" v-else>{{ item[c_item.key] }}</div>
						</div>
					</div>
				</el-col>
			</template>
			<template v-else>
				<el-col :span="24">
					<el-empty :description="t('em.noData')" />
				</el-col>
			</template>
		</el-row>
	</div>
	<div class="pagination-container" v-if="showPage">
		<el-pagination
			background
			v-model:current-page="currentPage"
			v-model:page-size="pageSizeT"
			:page-sizes="pageSizes"
			:layout="pageLayout"
			:total="total"
			v-bind="$attrs"
			@size-change="changePage"
			@current-change="changePage"
		/>
	</div>
</template>

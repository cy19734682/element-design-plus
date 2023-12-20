import { SlateElement, SlateText } from '@wangeditor/editor'
import type { SlateDescendant } from '@wangeditor/editor'
import type {ElTableColumn} from 'element-plus'

declare module '@wangeditor/editor' {
	// 扩展 Text
	interface SlateText {
		text: string
	}

	// 扩展 Element
	interface SlateElement {
		type: string
		children: SlateDescendant[]
	}
}

declare global {
	interface Window {
    BMap?: any
		_global?: Record<string, any>
		_AMapSecurityConfig?: Record<string, any>
		AMapSecure?: string
		ActiveXObject?: (type: string) => void
	}
}

export interface PlainObject extends Object {
	[k: keyof any]: any
}

export type Collection = PlainObject | PlainObject[]

export interface Option {
	label?: string

	val?: string | number

	disabled?: boolean

	[x: string]: any
}

export interface FormItem {
  ak?: string //百度地图ak码
  
	activeColor?: string // switch 打开时的背景色

	activeText?: string // switch 打开时的文字描述

	activeValue?: string | boolean | number // switch 打开时的值
  
  align?: string  // 对齐方式
  
  allowHalf?: boolean  // 是否允许半选
  
  autoUpload?: boolean  // Upload 是否自动上传

	append?: string //Input 输入框后置内容

	asyncOption?: boolean // 是否远程拉取数据

	autoSize?: boolean | { minRows?: number; maxRows?: number } //textarea 行高设置

  checkboxType?: string //Checkbox展示类型
  
	changeOption?: boolean | { valKey: string; key: string } | { valKey: string; key: string; notRequired?: boolean }[]
  
  checkStrictly?: boolean //Cascader 是否可以选任意一级
  
  class?: string //自定义样式
  
	collectLabel?: { valKey: string; key: string } | { valKey: string; key: string }[] // 需要收集额外字段
  
  colors?: string[] | object // Rate 颜色分段
  
	controls?: boolean // 是否使用控制按钮

	controlsPosition?: boolean //控制按钮位置
  
  columns?: typeof ElTableColumn[] //tableSelect 表格表头结构数据，同Element-ui

	data?: object //静态数据

	dateType?: string //日期事件类型

	defaultVal?: any // 默认值

	defaultVal2?: any // 默认值2

	disabled?: boolean //是否禁用
  
  disabledVoidColor?: string //Rate 只读时未选中 icon 的颜色

	editorConfig?: object //editor 编辑框配置
  
  endPlaceholder?: string //范围选择时结束日期的占位符
  
  fill?: string //激活时的填充色和边框色
  
  fileName?: string //Upload 上传文件的字段名
  
	filterable?: boolean //是否可搜索

	format?: string[] //限制文件上传类型
  
  formatTooltip?: <T>(d: T) => T  //Slider 格式化 tooltip message
  
  headers?: object // Upload 请求头额外参数
  
	height?: number | string //高度

	icon?: string //按钮
  
  inputPlaceholder?: string //input输入框占位符

	inactiveColor?: string //switch 关闭时的背景色

	inactiveText?: string //switch 关闭时的文字描述

	inactiveValue?: string | boolean | number //switch 关闭时的值
  
  isRange?: boolean //是否为时间范围选择
  
	itemBorder?: boolean //是否展示边框值

	key?: string //key值

	key2?: string //第二个key值

	label?: string //标签文本
  
  labelKey?: string //tableSelect 展示值的key

	length?: number // 长度

	level?: number //area 精确至几级行政区域

  listType?: string //Upload 文件列表的类型

	localOption?: any[] //本地Options数据
  
  marks?: object // Slider 标记
  
	mapHeight?: string //地图高度

	max?: number //最大值

	minLength?: number //最小长度

	maxLength?: number //最大长度

	maxSize?: number //Upload 单个文件大小限制

	min?: number //最小值

	mode?: string //editor 模式

	multiple?: boolean //是否多选

  pageSize?: number //tableSelect 表格查询数量
  
	options?: Option[]

	optionFilter?: <T>(d: T) => T

	optionLabel?: string | string[]

	optionUrl?: string

	optionVal?: string

	password?: boolean
  
  paramData?: object // upload 文件上传接口其他参数
  
  pickerOptions?: object //当前时间日期选择器特有的选项

	placeholder?: string //占位符
  
  placement?: string //tableSelect 弹窗从哪里弹出

	precision?: number //InputNumber 数值精度

	prepend?: string //Input 输入框前置内容

	readonly?: boolean //是否只读

	separator?: string //地址名称分隔符
  
  scoreTemplate?: string //Rate 分数显示模板
  
  selectKey?: string //select选择框的key，当这个值存在时，会返回2个字段
  
  selectWidth?: string //select选择框宽度
  
  selectPlaceholder?: string //select选择框占位符

	show?: { key: string; val: any[] } | { key: string; val: any[] }[] | (<T>(d: T) => T) //item展示条件
  
  showAllLevels?: boolean //Area 是否显示完整路径
  
	showOr?: boolean //多个展示条件时使用或判断

	showPassword?: boolean //Input 是否展示切换密码图标
  
  showStops?: boolean //Slider 是否显示间断点

  showScore?: boolean //Rate 是否显示当前分数
  
  showText?: boolean //Rate 是否显示辅助文字
  
  showTooltip?: boolean //是否显示 tooltip

	slotName?: string //自定义选项插槽名称

	slotPosition?: string //自定义选项插槽位置

	step?: number // 步长
  
  startPlaceholder?: string //范围选择时开始日期的占位符

  searchForm?: Option[] //tableSelect 表格搜索条件
  
  textColor?: string // Rate 辅助文字颜色
  
  texts?: string[] // Rate 辅助文字数组
  
	toolbarConfig?: object //editor toolbar配置

	type: string //类型
  
  trigger: string //弹出层触发方式

	url?: string

	val?: any

	valKey?: string //绑定值的key
  
  vertical?: boolean // 是否竖向模式
  
  voidColor?: string //Rate 未选中 icon 的颜色

	width?: number | string //宽度

	withCredentials?: boolean //Upload 是否支持跨域

  radioType?: string // radio展示类型
  
  range?: boolean // 是否范围选择
  
  rangeSeparator?: string // 日期选择范围时的分隔符

	[x: string]: any
}

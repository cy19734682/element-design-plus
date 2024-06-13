<script lang="ts" setup>
	import {
		ElForm,
		ElFormItem,
		ElInput,
		ElInputNumber,
		ElSwitch,
		ElSlider,
		ElRate,
		ElSelect,
		ElOption,
		ElRadioGroup,
		ElRadio,
		ElRadioButton,
		ElCheckboxGroup,
		ElCheckbox,
		ElCheckboxButton,
		ElDatePicker,
		ElTimePicker,
		ElColorPicker
	} from 'element-plus'

	import { t } from '../../locale'
	import type { FormItem } from '../../public'
	import EmBaiduMap from '../EmBaiduMap/index.vue'
	import EmCascader from '../EmCascader/index.vue'
	import EmCascaderArea from '../EmCascaderArea/index.vue'
	import EmEditor from '../EmEditor/index.vue'
	import EmUpload from '../EmUpload/index.vue'
	import EmIconSelect from '../EmIconSelect/index.vue'
	import EmTableSelect from '../EmTableSelect/index.vue'
	import EmSelectInput from '../EmSelectInput/index.vue'
	import { cloneDeep } from 'lodash-es'
	import { trimObj, myTypeof, isValidVal } from '../../methods'
	import { useInitForm, useUpdateForm, useClearForm, useLoading } from './hooks'
	import useState from './hooks/useState'

	defineOptions({
		name: 'EmForm'
	})

	const emit = defineEmits(['on-item-change', 'on-submit'])
	const props = withDefaults(
		defineProps<{
			formData?: FormItem[] //表单结构数据
			formRules?: Record<string, any> //表单结构规则
			showMessage?: boolean //是否显示校验信息
			inlineMessage?: boolean //是否以行内形式展示校验信息
			itemWidth?: string //表单项宽度
			labelWidth?: string //表单项标签宽度
			inline?: boolean //行内表单模式
			labelPosition?: 'left' | 'right' | 'top' //表单域标签的位置
			size?: 'large' | 'default' | 'small' //用于控制该表单内组件的尺寸
			showLongOkBt?: boolean //是否展示长确定按钮
			showInlineClearBt?: boolean //是否展示行内短清空按钮
			showInlineOkBt?: boolean //是否展示行内短确定按钮
			longOkBtTxt?: string //长确定按钮内容
			inlineOkBtTxt?: string //短确定按钮内容
			inlineClearBtTxt?: string //短清空按钮内容
			inlineOkBtIcon?: any //短确定按钮Icon
			inlineClearBtIcon?: any //短清空按钮Icon
			btnLoading?: boolean //提交按钮显示loading
			trim?: boolean //是否去除提交数据中的字符串首尾空格
			disabled?: boolean //整表禁用，仅展示
		}>(),
		{
			formData: () => [],
			formRules: () => ({}),
			showMessage: true,
			inlineMessage: false,
			itemWidth: '260px',
			labelWidth: '85px',
			inline: false,
			labelPosition: 'right',
			size: 'default',
			showLongOkBt: false,
			showInlineClearBt: false,
			showInlineOkBt: false,
			btnLoading: false,
			trim: true,
			disabled: false
		}
	)

	let debounceCount: boolean = false
	const { formDataT, tempKeys, dataGroup, elFormRef } = useState() //表单初始值
	const { initDataGroup, initItems } = useInitForm(props.formData, formDataT, tempKeys, dataGroup) //初始化表单项
	const { resetForm, reRenderForm, clearForm } = useClearForm(props.formData, formDataT, tempKeys, dataGroup, elFormRef) //清空、重置表单
	const { updateDataGroup, updateFormDataT } = useUpdateForm(props.formData, formDataT, tempKeys, dataGroup, elFormRef) //更新表单
	const { showLoading, changeLoading } = useLoading() //提交按钮loading
	const formRulesT = computed(() => {
		/*计算规则*/
		let t = cloneDeep(props.formRules)
		for (let k in t) {
			if (t.hasOwnProperty(k)) {
				if (Array.isArray(t[k])) {
					for (let e of t[k]) {
						if (!(e.message || e.validator)) {
							e.message = '该项为必填'
						}
					}
				} else if (myTypeof(t[k]) === 'Object') {
					if (!(t[k].message || t[k].validator)) {
						t[k].message = '该项为必填'
					}
				}
			}
		}
		return t
	})
	const itemStyle = computed<Record<string, any>>(() => (props.inline ? { width: props.itemWidth } : { width: '100%' }))

	/**
	 * 判断是否展示表单项（私有，高频被调用方法，每次表单中有任何值更改，都会被调用formDataT的长度<formDataT.length>次，而且还可能触发连锁反应）
	 * @param root 表单项结构数据
	 */
	const getFormItemIfVal = (root: Record<string, any>) => {
		let showing = true
		if (root.show) {
			if (myTypeof(root.show) === 'Object') {
				showing = dealIfItem(root.show)
			} else if (Array.isArray(root.show)) {
				if (root.showOr) {
					showing = false
					for (let x of root.show) {
						if (dealIfItem(x)) {
							//只要满足一个条件即可
							showing = true
							break
						}
					}
				} else {
					for (let x of root.show) {
						if (!dealIfItem(x)) {
							showing = false
							break
						}
					}
				}
			} else if (myTypeof(root.show) === 'Function') {
				showing = root.show(dataGroup.value)
			}
		}
		root.showing = showing
		return showing
	}

  /**
   *
   * 判断表单项是否展示（私有）
   * @param show 表单项的展示配置数据
   */
	const dealIfItem = (show: Record<string, any>) => {
		let isShow = false
		if (Array.isArray(show.val)) {
			for (let v of show.val) {
				if (dataGroup.value[show.key] === v) {
					isShow = true
					break
				}
			}
		} else {
			isShow = dataGroup.value[show.key] === show.val
		}
		return isShow
	}

	/**
	 * 去除校验（私有）
	 * 有些组件在数据发生变化时校验信息不会变化，例如 inputNumber
	 * @param e 当前数据
	 * @param root 表单项结构数据
	 */
	const clearValidateHandle = (e: any, root: Record<string, any>) => {
		nextTick(() => {
			if (isValidVal(e)) {
				elFormRef.value.clearValidate(root.key)
			}
		})
	}

	/**
	 * 重新校验（私有）
	 * 有些组件在数据发生变化后不会触发校验，需要手动触发，例如upload
	 * @param root 表单项结构数据
	 * @param item
	 */
	const reValidateAndChangeHandle = (item: Record<string, any>, root: Record<string, any>) => {
		nextTick(() => {
			elFormRef.value.validateField(root.key)
			itemChange(item, root)
		})
	}
	/**
	 * 更新选择输入框值(私有)
	 * @param d
	 */
	const onSelectInputChange = (d: Record<string, any>) => {
		if (d.key) {
			itemChange('selectInput', d)
		}
	}

	/**
	 * 更新级联组件名称（私有）
	 * @param name 行政区域名称
	 * @param root
	 */
	const caNameChange = (name: string, root: Record<string, any>) => {
		if (root.key2) {
			dataGroup.value[root.key2] = name
		}
		itemChange(name, root)
	}

	/**
	 * 表单项值更新（私有）
	 * @param e 事件的$event对象，一般是组件change事件的值
	 * @param root 表单项结构数据
	 */
	const itemChange = (e: any, root: Record<string, any>) => {
		setTimeout(() => {
			let d: Record<string, any> = {
				event: e
			}
			if (root.key) {
				d[root.key] = dataGroup.value[root.key]
			}
			if (root.key2) {
				d[root.key2] = dataGroup.value[root.key2]
			}
			if (root.key3) {
				d[root.key3] = dataGroup.value[root.key3]
			}
			if (root.collectLabel && root.collectLabel.key) {
				d[root.collectLabel.key] = dataGroup.value[root.collectLabel.key]
			} else if (Array.isArray(root.collectLabel)) {
				for (let l of root.collectLabel) {
					d[l.key] = dataGroup.value[l.key]
				}
			}
			emit('on-item-change', d)
		}, 100)
	}

	/**
	 * 获取需要提交的数据
	 * @return {{}}submit的值
	 */
	const getDataGroup = () => {
		let keys: any[] = []
		for (let e of formDataT.value) {
			if (e['showing'] === true && e.key) {
				if (e.type === 'selectInput') {
					//selectInput单独处理
					if (e.selectKey) {
						//选择框存在key的情况下,需要返回两个字段
						keys.push(e.selectKey)
						keys.push(e.key)
					} else {
						let si = dataGroup.value[e.key] || ''
						let siArr = si.split(':') || []
						if (siArr.length > 0) {
							keys.push(siArr[0])
						}
					}
				} else {
					keys.push(e.key)
					if (e.key2) {
						keys.push(e.key2)
					}
					if (e.key3) {
						keys.push(e.key3)
					}
					if (e.collectLabel) {
						if (myTypeof(e.collectLabel) === 'Object' && e.collectLabel.key) {
							keys.push(e.collectLabel.key)
						} else if (Array.isArray(e.collectLabel)) {
							for (let l of e.collectLabel) {
								if (l.key) {
									keys.push(l.key)
								}
							}
						}
					}
				}
			}
		}
		let t: Record<string, any> = {}
		for (let e of keys) {
			t[e] = dataGroup.value[e]
		}
		if (props.trim) {
			t = trimObj(t)
		}
		return t
	}
	/**
	 * 提交事件
	 */
	const submit = () => {
		if (props.disabled) {
			return
		}
		elFormRef.value.validate((valid: boolean) => {
			if (!debounceCount) {
				debounceCount = true
				if (valid) {
					showLoading.value = true
					emit('on-submit', getDataGroup())
				}
				setTimeout(() => {
					debounceCount = false
				}, 2000)
			}
		})
	}

	initDataGroup() //初始化表单值
	initItems() //初始化表单项

	defineExpose({
		clearForm,
		resetForm,
		reRenderForm,
		updateDataGroup,
		updateFormDataT,
		changeLoading,
		getDataGroup,
		submit
	})
</script>
<template>
	<div class="em-form">
		<el-form
			ref="elFormRef"
			:model="dataGroup"
			:rules="formRulesT"
			:label-position="labelPosition"
			:label-width="labelWidth"
			:show-message="showMessage"
			:inline-message="inlineMessage"
			:inline="inline"
			:size="size"
			:disabled="disabled"
			@submit.prevent
		>
			<!--解决form只有一个input时enter触发页面刷新的问题-->
			<el-form-item style="display: none"><input type="text" /></el-form-item>
			<template v-for="(item, index) in formDataT">
				<el-form-item
					v-if="getFormItemIfVal(item)"
					:key="item.key + '-' + index"
					:prop="item.key"
					:label="item.label"
					:label-width="item.labelWidth || labelWidth"
					:show-message="item.showMessage || showMessage"
					:class="item.class || ''"
					:style="itemStyle"
				>
					<!--纯文本,也可以不传label和val,单纯用来布局占位-->
					<div v-if="item.type === 'txt'" style="display: inline-block; color: #606266">{{ item.val }}</div>
					<!-- Inupt输入框 -->
					<el-input
						v-if="item.type === 'input'"
						v-model="tempKeys[item.tempKey]"
						:maxlength="item.maxLength || null"
						:minlength="item.minLength || null"
						:placeholder="item.placeholder || t('em.pInput')"
						clearable
						:show-password="item.showPassword"
						:disabled="item.disabled || disabled"
						:readonly="item.readonly"
						@blur="itemChange($event, item)"
					>
						<template v-if="item.prepend" #prepend>
							<span>{{ item.prepend }}</span>
						</template>
						<template v-if="item.append" #append>
							<span>{{ item.append }}</span>
						</template>
					</el-input>
					<!-- InputNumber 输入框 -->
					<el-input-number
						v-else-if="item.type === 'inputNumber'"
						v-model="tempKeys[item.tempKey]"
						:min="item.min || item.min === 0 ? item.min : -Infinity"
						:max="item.max || item.max === 0 ? item.max : Infinity"
						:step="item.step || 1"
						:precision="item.precision"
						:placeholder="item.placeholder || t('em.pInput')"
						:controls="item.controls || true"
						:controls-position="item.controlsPosition || 'right'"
						:disabled="item.disabled || disabled"
						:readonly="item.readonly"
						@blur="itemChange($event, item)"
						@input.native="clearValidateHandle($event, item)"
					/>
					<!-- Switch  开关 -->
					<el-switch
						v-else-if="item.type === 'switch'"
						v-model="tempKeys[item.tempKey]"
						:disabled="item.disabled || disabled"
						:width="item.width"
						:active-text="item.activeText"
						:inactive-text="item.inactiveText"
						:active-value="item.activeValue"
						:inactive-value="item.inactiveValue"
						:active-color="item.activeColor || '#409EFF'"
						:inactive-color="item.inactiveColor || '#C0CCDA'"
						@change="itemChange($event, item)"
					/>
					<!-- Slider 滑块 -->
					<el-slider
						v-else-if="item.type === 'slider'"
						v-model="tempKeys[item.tempKey]"
						:disabled="item.disabled || disabled"
						:min="item.min || 0"
						:max="item.max || 100"
						:step="item.step || 1"
						:show-stops="item.showStops"
						:show-tooltip="item.showTooltip"
						:format-tooltip="item.formatTooltip"
						:range="item.range"
						:vertical="item.vertical"
						:height="item.height"
						:marks="item.marks"
						@change="itemChange($event, item)"
					/>
					<!-- Rate 评分 -->
					<el-rate
						v-else-if="item.type === 'rate'"
						v-model="tempKeys[item.tempKey]"
						:disabled="item.disabled || disabled"
						:max="item.max || 5"
						:allow-half="item.allowHalf"
						:colors="item.colors"
						:void-color="item.voidColor"
						:disabled-void-color="item.disabledVoidColor"
						:show-text="item.showText"
						:show-score="item.showScore"
						:text-color="item.textColor"
						:texts="item.texts"
						:score-template="item.scoreTemplate"
						@change="itemChange($event, item)"
					/>
					<!-- Select 下拉框 -->
					<el-select
						v-else-if="item.type === 'select'"
						v-model="tempKeys[item.tempKey]"
						:filterable="item.filterable || true"
						:multiple="item.multiple || false"
						clearable
						:placeholder="item.placeholder || t('em.pSelect')"
						:disabled="item.disabled || disabled"
						@change="itemChange($event, item)"
					>
						<el-option
							v-for="optionItem in item.options"
							:key="'selectItem' + optionItem.val"
							:label="optionItem.label"
							:value="optionItem.val"
							:disabled="!!optionItem.disabled"
						/>
					</el-select>
					<!-- SelectInput 下拉输入框 -->
					<em-select-input
						v-else-if="item.type === 'selectInput'"
						v-model="tempKeys[item.tempKey]"
						:url="item.url"
						:data="item.data"
						:select-width="item.selectWidth"
						:filterable="item.filterable"
						:option-filter="item.optionFilter"
						:option-val="item.optionVal"
						:option-label="item.optionLabel"
						:disabled="item.disabled || disabled"
						:select-placeholder="item.selectPlaceholder"
						:input-placeholder="item.inputPlaceholder"
						@on-change="onSelectInputChange"
					/>
					<!--单选组-->
					<el-radio-group
						v-else-if="item.type === 'radio'"
						v-model="tempKeys[item.tempKey]"
						:size="item.size || 'default'"
						:text-color="item.textColor || '#ffffff'"
						:fill="item.fill || '#409EFF'"
						:disabled="item.disabled || disabled"
						@input="itemChange($event, item)"
					>
						<template v-if="item.radioType === 'button'">
							<el-radio-button
								v-for="radioItem of item.options"
								:key="'radioItem' + radioItem.val"
								:value="radioItem.val"
                :label="radioItem.label || radioItem.val || ''"
								:border="item.itemBorder || false"
								:disabled="!!radioItem.disabled"
							/>
						</template>
						<template v-else>
							<el-radio
								v-for="radioItem of item.options"
								:key="'radioItem' + radioItem.val"
								:value="radioItem.val"
                :label="radioItem.label || radioItem.val || ''"
								:border="item.itemBorder || false"
								:disabled="!!radioItem.disabled"
							/>
						</template>
					</el-radio-group>
					<!--多选组-->
					<el-checkbox-group
						v-else-if="item.type === 'checkbox'"
						v-model="tempKeys[item.tempKey]"
						:size="item.size || 'default'"
						:text-color="item.textColor || '#ffffff'"
						:fill="item.fill || '#409EFF'"
						:disabled="item.disabled || disabled"
						@input="itemChange($event, item)"
					>
						<template v-if="item.checkboxType === 'button'">
							<el-checkbox-button
								v-for="checkItem of item.options"
								:key="'optionItem' + checkItem.val"
								:value="checkItem.val"
								:label="checkItem.label || checkItem.val"
								:border="item.itemBorder || false"
								:disabled="!!checkItem.disabled"
							/>
						</template>
						<template v-else>
							<el-checkbox
								v-for="checkItem of item.options"
								:key="'optionItem' + checkItem.val"
								:value="checkItem.val"
                :label="checkItem.label || checkItem.val"
								:border="item.itemBorder || false"
								:disabled="!!checkItem.disabled"
							/>
						</template>
					</el-checkbox-group>
					<!--多行文本框-->
					<el-input
						v-else-if="item.type === 'textarea'"
						type="textarea"
						v-model="tempKeys[item.tempKey]"
						:autosize="item.autosize || { minRows: 2 }"
						:maxlength="item.maxLength || null"
						:show-word-limit="item.showWordLimit || false"
						:placeholder="item.placeholder || t('em.pInput')"
						clearable
						:disabled="item.disabled || disabled"
						@blur="itemChange($event, item)"
					/>
					<!--日期组件-->
					<el-date-picker
						v-else-if="item.type === 'date'"
						v-model="tempKeys[item.tempKey]"
						:type="item.dateType"
						:align="item.align || 'left'"
						:range-separator="item.rangeSeparator || '-'"
						:placeholder="item.placeholder || t('el.datepicker.selectDate')"
						:start-placeholder="item.startPlaceholder || t('el.datepicker.startDate')"
						:end-placeholder="item.endPlaceholder || t('el.datepicker.endDate')"
						:disabled-date="item.disabledDate"
						:disabled="item.disabled || disabled"
						@change="itemChange($event, item)"
					>
					</el-date-picker>
					<!--时间组件-->
					<el-time-picker
						v-else-if="item.type === 'time'"
						v-model="tempKeys[item.tempKey]"
						:align="item.align || 'left'"
						:is-range="item.isRange || false"
						:range-separator="item.rangeSeparator || '-'"
						:placeholder="item.placeholder || t('el.datepicker.selectTime')"
						:start-placeholder="item.startPlaceholder || t('el.datepicker.startTime')"
						:end-placeholder="item.endPlaceholder || t('el.datepicker.endTime')"
						:disabled-hours="item.disabledHours"
						:disabled-minutes="item.disabledMinutes"
						:disabled-seconds="item.disabledSeconds"
						:disabled="item.disabled || disabled"
						@change="itemChange($event, item)"
					>
					</el-time-picker>
					<!--上传组件-->
					<em-upload
						v-else-if="item.type === 'upload'"
						v-model="dataGroup[item.key]"
						:url="item.url"
						:auto-upload="item.autoUpload"
						:multiple="item.multiple"
						:format="item.format || []"
						:headers="item.headers"
						:paramData="item.paramData"
						:fileName="item.fileName"
						:max-size="item.maxSize"
						:length="item.length"
						:list-type="item.listType"
						:disabled="item.disabled || disabled"
						:with-credentials="item.withCredentials"
						:upload-fetch="item.uploadFetch"
						@update:modelValue="reValidateAndChangeHandle($event, item)"
					/>
					<!--行政区域级联-->
					<em-cascader-area
						v-else-if="item.type === 'area'"
						v-model="dataGroup[item.key]"
						:level="item.level"
						:disabled="item.disabled || disabled"
						:filterable="item.filterable"
						:separator="item.separator"
						:size="item.size"
						:placeholder="item.placeholder"
						:show-all-levels="item.showAllLevels"
						@on-name-change="caNameChange($event, item)"
					/>
					<!--自定义级联-->
					<em-cascader
						v-else-if="item.type === 'cascader'"
						v-model="dataGroup[item.key]"
						:disabled="item.disabled || disabled"
						:filterable="item.filterable"
						:url="item.url"
						:data="item.data"
						:check-strictly="item.checkStrictly"
						:multiple="item.multiple"
						:option-val="item.optionVal"
						:option-label="item.optionLabel"
						:option-filter="item.optionFilter"
						:separator="item.separator"
						:size="item.size"
						:placeholder="item.placeholder"
						:show-all-levels="item.showAllLevels"
						@on-name-change="caNameChange($event, item)"
					/>
					<!--百度地图-->
					<em-baidu-map
						v-else-if="item.type === 'bdMap'"
						v-model="tempKeys[item.tempKey]"
						:placeholder="item.placeholder"
						:disabled="item.disabled || disabled"
						:width="item.mapWidth"
						:height="item.mapHeight"
						:ak="item.ak"
						@update:modelValue="reValidateAndChangeHandle($event, item)"
					/>
					<!--富文本框-->
					<em-editor
						v-else-if="item.type === 'editor'"
						v-model="dataGroup[item.key]"
						:placeholder="item.placeholder"
						:disabled="item.disabled || disabled"
						:toolbar-config="item.toolbarConfig"
						:editor-config="item.editorConfig"
						:mode="item.mode"
						:height="item.height"
						@update:modelValue="reValidateAndChangeHandle($event, item)"
					/>
					<!--颜色选择-->
					<el-color-picker
						v-else-if="item.type === 'colorPicker'"
						v-model="dataGroup[item.key]"
						:disabled="item.disabled || disabled"
						:size="item.size"
						:show-alpha="item.showAlpha"
						:color-format="item.colorFormat"
						:popper-class="item.popperClass"
						:predefine="item.predefine"
						@change="itemChange($event, item)"
					/>
					<!--图标选择-->
					<em-icon-select
						v-else-if="item.type === 'selectIcon'"
						v-model="dataGroup[item.key]"
						:data="item.data"
						:background="item.background"
						:color="item.color"
						:disabled="item.disabled || disabled"
						:width="item.width"
						:trigger="item.trigger"
						:placeholder="item.placeholder"
						@update:modelValue="itemChange($event, item)"
					/>
					<!--表格选择-->
					<em-table-select
						v-else-if="item.type === 'tableSelect'"
						v-model="dataGroup[item.key]"
						:url="item.url"
						:search-form="item.searchForm"
						:columns="item.columns"
						:page-size="item.pageSize"
						:disabled="item.disabled || disabled"
						:width="item.width"
						:multiple="item.multiple"
						:label-key="item.labelKey"
						:val-key="item.valKey"
						:placeholder="item.placeholder"
						:placement="item.placement"
						@update:modelValue="reValidateAndChangeHandle($event, item)"
					/>
					<!--自定义选项-->
					<div v-else-if="item.type === 'custom'" class="inlineBlock wd100">
						<slot :name="item.slotName" :data-group="dataGroup" />
					</div>
          <!--表单项提示文字-->
          <div v-if="Boolean(item.info)" class="em-item-info" :style="{color: item.infoColor || '#409eff'}">{{ item.info }}</div>
				</el-form-item>
			</template>
			<!--长提交按钮-->
			<el-form-item v-if="showLongOkBt">
				<el-button type="primary" :loading="btnLoading && showLoading" :disabled="disabled" @click="submit">
					{{ longOkBtTxt || t('em.button.confirm') }}
				</el-button>
			</el-form-item>
			<!--短提交按钮（提交）-->
			<el-form-item v-if="showInlineOkBt || showInlineClearBt">
				<el-button
					v-if="showInlineOkBt"
					type="primary"
					:icon="inlineOkBtIcon"
					:loading="btnLoading && showLoading"
					:disabled="disabled"
					@click="submit"
				>
					{{ inlineOkBtTxt || t('em.button.confirm') }}
				</el-button>
				<el-button v-if="showInlineClearBt" :icon="inlineClearBtIcon" @click="resetForm"
					>{{ inlineClearBtTxt || t('em.button.clear') }}
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

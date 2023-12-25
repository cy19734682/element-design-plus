import type { Ref } from 'vue'
import useInitForm from './useInitForm'
import { isValidVal } from '../../../methods'

/**
 * 重置表单相关hooks
 * @param formData 表单Props的值
 * @param formDataT
 * @param tempKeys
 * @param dataGroup
 * @param elFormRef
 */
export default function (
	formData: any[] = [],
	formDataT: Ref<any[]>,
	tempKeys: Ref<Record<string, any>>,
	dataGroup: Ref<Record<string, any>>,
	elFormRef: Ref<any>
) {
	/**
	 * 获取表单默认值
	 */
	const getDefaultValues = () => {
		const getTempKeyDefaultVal = (root: Record<string, any>, a: Record<string, any>) => {
			switch (root.type) {
				case 'selectInput':
					a[root.tempKey] = {
						key: root.defaultKey,
						val: root.defaultVal
					}
					break
				case 'bdMap':
					a[root.tempKey] = {
						lng: root.defaultVal || 0,
						lat: root.defaultVal2 || 0
					}
					if (root.key3) {
						a[root.tempKey]['name'] = root.defaultVal3 || ''
					}
					break
				case 'input':
				case 'switch':
				case 'inputNumber':
				case 'slider':
				case 'rate':
				case 'textarea':
					a[root.tempKey] = root.defaultVal
					break
				case 'radio':
				case 'select':
				case 'checkbox':
					if (root.booleanVal) {
						a[root.tempKey] = Boolean(root.defaultVal) ? 1 : 0
					} else {
						a[root.tempKey] = root.defaultVal
					}
					break
				case 'date':
				case 'time':
					if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType === 'monthrange') {
						a[root.tempKey] = (root.defaultVal && root.defaultVal2 && [root.defaultVal, root.defaultVal2]) || []
					} else if (root.type === 'time') {
						let constTime = '1970-01-01 ' //时间类型的不能直接赋值，需要拼接年月日
						if (root.isRange) {
							a[root.tempKey] =
								(root.defaultVal && root.defaultVal2 && [constTime + root.defaultVal, constTime + root.defaultVal2]) ||
								null
						} else {
							a[root.tempKey] = (root.defaultVal && constTime + root.defaultVal) || null
						}
					} else {
						a[root.tempKey] = root.defaultVal
					}
					break
			}
		}
		let t: Record<string, any> = {}
		for (let root of formDataT.value) {
			if (root.tempKey && isValidVal(root.defaultVal)) {
				/*将默认值转换为表单项绑定值对应的格式*/
				getTempKeyDefaultVal(root, t)
			}
			if (root.key && isValidVal(root.defaultVal)) {
				t[root.key] = root.defaultVal
			}
			if (root.key2 && isValidVal(root.defaultVal2)) {
				t[root.key2] = root.defaultVal2
			}
			if (root.key3 && isValidVal(root.defaultVal3)) {
				t[root.key3] = root.defaultVal3
			}
		}
		return t
	}

	/**
	 * 初始化表单默认值
	 * @param t formDataT的临时key
	 * @param k key值
	 */
	const clearFormData = (t: string, k: any) => {
		let d = t === 'tempKey' ? tempKeys.value : dataGroup.value
		if (Array.isArray(d[k])) {
			d[k] = []
		} else {
			const formItem = formDataT.value.find((e) => e[t] === k)
			if (formItem && formItem.type === 'editor') {
				d[k] = ''
			} else if (
				formItem &&
				(formItem.type === 'inputNumber' || formItem.type === 'slider' || formItem.type === 'rate')
			) {
				d[k] = undefined
			} else if (formItem && formItem.type === 'switch') {
				d[k] = false
			} else {
				d[k] = null
			}
		}
	}

	/**
	 * 清空缓存表单值
	 * @param defaultV
	 */
	const clearTempKeys = (defaultV: Record<string, any>) => {
		for (let k in tempKeys.value) {
			if (defaultV.hasOwnProperty(k) && isValidVal(defaultV[k])) {
				tempKeys.value[k] = defaultV[k]
			} else {
				clearFormData('tempKey', k)
			}
		}
	}

	/**
	 * 清空表单
	 */
	const resetForm = () => {
		return new Promise<void>((r) => {
			clearForm()
			elFormRef.value.resetFields()
			r()
		})
	}

	/**
	 * 重新渲染表单
	 */
	const reRenderForm = () => {
		return new Promise<void>((r) => {
			elFormRef.value.resetFields()
			const { initDataGroup, initItems } = useInitForm(formData, formDataT, tempKeys, dataGroup)
			initDataGroup()
			initItems()
			r()
		})
	}

	/**
	 * 清空表单值
	 */
	const clearForm = () => {
		let defaultV = getDefaultValues() //获取表单默认值
		for (let k in dataGroup.value) {
			if (defaultV.hasOwnProperty(k) && isValidVal(defaultV[k])) {
				dataGroup.value[k] = defaultV[k]
			} else {
				clearFormData('key', k)
			}
		}
		clearTempKeys(defaultV) //清理临时keys
	}

	return {
		resetForm,
		reRenderForm,
		clearForm,
		clearFormData
	}
}

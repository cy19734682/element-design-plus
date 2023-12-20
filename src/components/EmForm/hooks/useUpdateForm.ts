import useState from './useState'
import useClearForm from './useClearForm'
import { isValidVal, myTypeof } from '../../../methods'

const { formDataT, tempKeys, dataGroup } = useState()
const { clearFormData } = useClearForm()

/**
 * 更新tempKeys的值
 * @param d
 * @param notClearOthers
 */
const updateTempKeys = (d: Record<string, any>,notClearOthers = false) => {
  let t = tempKeys.value
  for (let root of formDataT.value) {
    if (
      ((notClearOthers && (d[root.key] !== undefined || d[root.key2] !== undefined)) || !notClearOthers) &&
      root.tempKey
    ) {
      switch (root.type) {
        case 'bdMap':
          if (myTypeof(d[root.key]) === 'Number' && myTypeof(d[root.key2] === 'Number')) {
            t[root.tempKey] = {
              lng: d[root.key],
              lat: d[root.key2]
            }
            if (root.key3) {
              t[root.tempKey]['name'] = d[root.key3] || ''
            }
          } else {
            t[root.tempKey] = {
              lng: null,
              lat: null
            }
            if (root.key3) {
              t[root.tempKey]['name'] = ''
            }
          }
          break
        case 'selectInput':
        case 'input':
        case 'inputNumber':
        case 'switch':
        case 'slider':
        case 'rate':
        case 'textarea':
          if (d[root.key] || d[root.key] === 0) {
            t[root.tempKey] = d[root.key]
          } else {
            if (root.type === 'inputNumber' || root.type === 'slider' || root.type === 'rate') {
              t[root.tempKey] = undefined
            } else if (root.type === 'switch') {
              t[root.tempKey] = false
            } else {
              t[root.tempKey] = null
            }
          }
          break
        case 'select':
        case 'radio':
        case 'checkbox':
          if (isValidVal(d[root.key])) {
            if (root.multiple || root.type === 'checkbox') {
              t[root.tempKey] = [...d[root.key]]
            } else if (root.booleanVal) {
              t[root.tempKey] = Boolean(d[root.key]) ? 1 : 0
            } else {
              t[root.tempKey] = d[root.key]
            }
          } else {
            if (root.multiple || root.type === 'checkbox') {
              /*当notClearOthers为false时用来清空*/
              t[root.tempKey] = []
            } else {
              t[root.tempKey] = null
            }
          }
          break
        case 'date':
        case 'time':
          if (root.dateType === 'daterange' || root.dateType === 'datetimerange' || root.dateType === 'monthrange') {
            t[root.tempKey] = (d[root.key] && d[root.key2] && [d[root.key], d[root.key2]]) || []
          } else if (root.type === 'time') {
            let constTime = '1970-01-01 ' //时间类型的不能直接赋值，需要拼接年月日
            if (root.isRange) {
              t[root.tempKey] =
                (d[root.key] && d[root.key2] && [constTime + d[root.key], constTime + d[root.key2]]) || null
            } else {
              t[root.tempKey] = (d[root.key] && constTime + d[root.key]) || null
            }
          } else {
            t[root.tempKey] = d[root.key] || null
          }
          break
      }
    }
  }
}

/**
 * 改变表单结构
 * @param d 同updateFormDataT的 d
 */
const changeDataHandle = (d: Record<string, any>) => {
  const { index, key, val } = d
  if (index || index === 0) {
    if (key && (val || val !== undefined)) {
      formDataT.value[index][key] = val
    } else {
      for (let k of Object.keys(d)) {
        if (k !== 'index') {
          formDataT.value[index][k] = d[k]
        }
      }
    }
  }
}

/**
 * 更新表单相关hooks
 */
export default function () {

	/**
	 * 更新表单项的值
	 * @param data 新数据
	 * @param notClearOthers 是否清空其他表单项，默认清空
	 */
	const updateDataGroup = (data: Record<string, any>, notClearOthers = false) => {
		updateTempKeys(data, notClearOthers)
		for (let k in dataGroup.value) {
			if (data[k] !== undefined) {
				dataGroup.value[k] = data[k]
			} else if (!notClearOthers) {
				clearFormData('key', k)
			}
		}
	}

	/**
	 * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值
	 * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
	 * 则为:{index:1,label:XXX,title:XXX}
	 */
	const updateFormDataT = (d: any[] | Record<string, any>) => {
		if (Array.isArray(d)) {
			for (let e of d) {
				changeDataHandle(e)
			}
		} else if (myTypeof(d) === 'Object') {
			changeDataHandle(d)
		}
	}

	return {
		updateDataGroup,
		updateFormDataT
	}
}

/**
 * 定义页面上的变量
 */
const elFormRef = ref<any>()
let showLoading = ref<boolean>(false)
let formDataT = ref<any[]>([])
let tempKeys = ref<Record<string, any>>({})
let dataGroup = ref<Record<string, any>>({})
let watchGroup = ref<any[]>([])
export default function () {
  return {
    formDataT,
    tempKeys,
    dataGroup,
    watchGroup,
    showLoading,
    elFormRef
  }
}

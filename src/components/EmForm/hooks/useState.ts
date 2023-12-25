/**
 * 定义页面上的变量
 */
export default function () {
  const elFormRef = ref<any>()
  const formDataT = ref<any[]>([])
  const tempKeys = ref<Record<string, any>>({})
  const dataGroup = ref<Record<string, any>>({})
  const watchGroup = ref<any[]>([])
  return {
    formDataT,
    tempKeys,
    dataGroup,
    watchGroup,
    elFormRef
  }
}

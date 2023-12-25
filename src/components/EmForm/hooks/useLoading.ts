
/**
 * 提交按钮loading效果
 * @returns {{}}
 */
export default function () {
  const showLoading = ref<boolean>(false)
  /**
   * 主动改变表单按钮loading状态
   * @param v
   */
  const changeLoading = (v?: boolean) => {
    if (v === undefined) {
      return
    }
    showLoading.value = Boolean(v)
  }
  
  return {
    showLoading,
    changeLoading
  }
}

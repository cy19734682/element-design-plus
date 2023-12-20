import $request from '../methods/request'

// 校验用户是否拥有按钮权限
function hasPermission(el:Element, binding: any) {
  const store = $request?.config?.store || {}
  const roles = store?.getters?.roles || []
  // 超级管理员拥有所有的按钮权限
  if (roles.includes('ROOT')) {
    return true
  }
  const {value} = binding
  const perms = store?.getters?.perms
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const requiredPerms = value
      const hasPermission = perms.some((perm: string) => {
        return requiredPerms.includes(perm)
      })
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
  else {
    throw new Error(`need perms! Like v-has-permission="['sys:user:add','sys:user:edit']"`)
  }
}

export default {
  mounted(el: Element, binding: any) {
    hasPermission(el, binding)
  },
  updated(el: Element, binding: any) {
    hasPermission(el, binding)
  }
}

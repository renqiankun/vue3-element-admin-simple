import store from '@/store/index'

function checkPermission(el:any, binding:any) {
  const { value } = binding
  const permissionCodes = store.getters && store.getters.permissionCodes
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value
      const hasPermissionCode = permissionCodes.some((role:any) => {
        return permissionRoles.includes(role)
      })
      if (!hasPermissionCode) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export const permission:any = {
  mounted(el:any, binding:any) {
    checkPermission(el, binding)
  },
  update(el:any, binding:any) {
    checkPermission(el, binding)
  }
}

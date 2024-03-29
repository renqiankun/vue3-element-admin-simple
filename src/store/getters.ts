const getters = {
  activeMenu: (state:any) => state.pro.activeMenu,
  useTabs: (state:any) => state.pro.useTabs,
  useBread: (state:any) => state.pro.useBread,
  homePath: (state:any) => state.pro.homePath,
  highlightParentMenu: (state:any) => state.pro.highlightParentMenu,
  menuList: (state:any) => state.pro.menuList,
  menuTree: (state:any) => state.pro.menuTree,

  roles: (state:any) => state.user.roles,
  //权限列表
  permissionCodes: (state:any) => state.pro.permissionCodes,
}
export default getters

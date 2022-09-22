const getters = {
  activeMenu: (state:any) => state.pro.activeMenu,
  useTabs: (state:any) => state.pro.useTabs,
  useBread: (state:any) => state.pro.useBread,
  homePath: (state:any) => state.pro.homePath,
  highlightParentMenu: (state:any) => state.pro.highlightParentMenu,
  menuList: (state:any) => state.pro.menuList,
  menuTree: (state:any) => state.pro.menuTree,

  roles: (state:any) => state.user.roles,
  permissionCodes: (state:any) => state.user.permissionCodes,
}
export default getters

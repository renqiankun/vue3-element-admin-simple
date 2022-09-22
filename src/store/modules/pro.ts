import { dynamicRoutes, staticRoutes } from '@/router/index'
import { treeDataTranslate } from '@/utils/index'
import { cloneDeep } from 'lodash-es'

export default {
  namespaced: true,
  state: {
    useTabs: true, //使用tabs
    useBread: false, //使用面包屑
    highlightParentMenu: true, //激活menu为hide时尝试高亮父级
    isHorizontal: true, //布局 左右
    homePath: '/home/index', //首页路径
    activeMenu: '', //激活的菜单id
    menuList: [], //菜单列表  { menuId: 1,parentId:'', title: '首页', path: '/home', }
    menuTree: [] //菜单树 由menuList转换{ menuId: 1,parentId:'', title: '首页', path: '/home' ,children:[]},
  },
  mutations: {
    //修改激活菜单
    updateActiveMenu(state: any, val: any) {
      state.activeMenu = val
    },
    //修改菜单列表
    updateMenuList(state: any, val: any) {
      state.menuList = val
    },
    //菜单树
    updateMenuTree(state: any, val: any) {
      state.menuTree = val
    },

    //更新是否使左右布局
    updateIsHorizontal(state: any, val: any) {
      state.isHorizontal = val
    },
    //更新是否使用tabs
    updateUseTabs(state: any, val: any) {
      state.useTabs = val
    },
    //更新是否使用面包屑
    updateUseBread(state: any, val: any) {
      state.useBread = val
    }
  },
  actions: {
    //获取菜单列表
    async getMenuList({ commit }: any) {
      //dynamicRoutes 后续为接口获取
      var routeList = [...staticRoutes, ...dynamicRoutes]
      //重置结构
      var newRouteList = routeList.map(item => {
        return { ...item }
      })
      var cloneRouteList = cloneDeep(newRouteList)
      var tree = treeDataTranslate(newRouteList, 'menuId', 'parentId')
      commit('updateMenuTree', tree)
      commit('updateMenuList', cloneRouteList)
      return { code: 200, menuList: cloneRouteList }
    }
  }
}

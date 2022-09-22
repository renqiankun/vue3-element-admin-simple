import router, { addRoutesHand } from './index'
import store from '@/store/index'
//获取views下所有组件
const allRouteComponentMap = import.meta.glob('../views/**/*.vue')
var hasLoadMenuList = false
//路由跳转验证
router.beforeEach(async (to, from, next) => {
  if (!hasLoadMenuList) {
    var menuData = await store.dispatch('pro/getMenuList')
    if (menuData && menuData.code == 200) {
      var routesComponent = resetRoutesHand(menuData.menuList)
      addRoutesHand(routesComponent)
      hasLoadMenuList = true
      return next({ ...to, replace: true })
    } else {
      //获取菜单失败 跳转login
    }
  }
  next()
})

const resetRoutesHand = (routes = []) => {
  var resetRoutes: any = []
  routes.forEach((item: any) => {
    var allPath = `../views${item.path}.vue`
    var component = allRouteComponentMap[allPath]
    if (item.path && component) {
      resetRoutes.push({
        path: item.path,
        component: component,
        meta: {
          title: item.title,
          icon: item.icon,
          hide: item.hide
        }
      })
    }
  })
  return resetRoutes
}

const _loadComponent = (path: string) => {
  return () => import(`@/views${path}.vue`)
}

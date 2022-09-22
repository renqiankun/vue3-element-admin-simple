// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
interface RouteItem {
  path: String
  menuId: String | Number
  title: String
  parentId: String | Number
  icon?: String
  hide?: String | Boolean
}
//需要菜单结构不需要走 接口的路由, 会在接口请求完成后合并此列表
export const staticRoutes: Array<RouteItem> = [
  { path: '/home/index', menuId: 'static-1', title: '首页', parentId: '', icon: '' },
  { path: '/test/index', menuId: 'static-2', title: '测试页', parentId: '', icon: '' },
  {
    path: '/test/text-child',
    menuId: 'static-3',
    title: '子页面',
    hide: true, 
    parentId: 'static-2',
    icon: ''
  }
]
//后端返回的动态路由
export var dynamicRoutes: Array<RouteItem> = [
  { title: 'test2', menuId: '1', parentId: '', path: '', icon: '', hide: false },
  {
    title: 'menu2',
    menuId: '1-1',
    parentId: '1',
    path: '/dataEntry/index',
    icon: '',
    hide: false
  },
]

//不需要菜单的通用路由
const genelRoutes = [
  { path: '/login', component: () => import('@/views/login/index.vue'), meta: {} },
  { path: '/404', component: () => import('@/views/404/index.vue'), meta: {} }
]

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home/index',
    name: 'root',
    children: []
  },
  ...genelRoutes
]
//初始化方法
const createRouterHand = () => {
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
}

const router = createRouterHand()

export const addRoutesHand = (routes = []) => {
  routes.forEach(route => {
    router.addRoute('root', route)
  })
  router.addRoute({ path: '/:catchAll(.*)', redirect: '/404', meta: { hide: true } })
}
export default router


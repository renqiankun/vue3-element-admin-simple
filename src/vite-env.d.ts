/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "element-plus/dist/locale/zh-cn.mjs"
declare module '@/store/index'
declare module '@/utils/index'
declare module '@/router/index'


declare module '@/utils/*'
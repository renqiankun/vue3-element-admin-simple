import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'
//废弃改为按需引用 https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
// import element from './element-plus'

import svgIcon from './components/SvgIcon.vue' // 全局svg图标组件
import Pagination from './components/Pagination.vue' //
import datePicker from './components/datePicker.vue' // 日期范围组件
import Table from './components/Table.vue' //

import 'element-plus/es/components/message-box/style/index'
import 'element-plus/es/components/message/style/index'
import './theme/layout.scss'
import './theme/common.scss'
import '@/router/routerEach'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(element)
app.component('svg-icon', svgIcon)
app.component('Pagination', Pagination)
app.component('datePicker', datePicker)
app.component('Table', Table)

app.mount('#app')

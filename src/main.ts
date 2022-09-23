import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'

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
app.component('svg-icon', svgIcon)
app.component('Pagination', Pagination)
app.component('datePicker', datePicker)
app.component('Table', Table)

app.mount('#app')

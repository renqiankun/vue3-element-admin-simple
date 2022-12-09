import { App } from 'vue';
import {permission} from './permission'

const install:any = function(Vue:App) {
  Vue.directive('permission', permission)
}

permission.install = install
export default permission

# Vue 3 + TypeScript + Vite + element-plus + vuex
  
  1. npm i
  2. npm run dev

## Type Support For `.vue` Imports in TS


1. 上下、左右布局
2. 主题色修改(src/theme/element-variable.scss)、 element-plus手动按需引入（移除按需自动引入，以防止引入不受控问题）
3. tabs、面包屑
4. 细粒度菜单样式修改(src/theme/theme-variable.module.scss)
5. 尝试高亮父级菜单：子菜单配置hide:true时， 跳转此菜单隐藏的路由会尝试高亮父级，同时退出此路由时此tabs自动关闭(默认开启)
6. 按钮权限指令(v-permission="['p1','p2']")
7. ~菜单缩放~
8. ~打包图片压缩~
9. 暗黑模式支持 （自定义组件未适配）
9. 自定义密码组件 基于nice-pass-word修改已支持火狐(https://github.com/zRa1ny/nice-pass-word )不会触发浏览器记住密码操作（请在callback实时获取实际值）
![image](https://user-images.githubusercontent.com/27206174/191883270-37fba4fa-d64c-4fed-a77d-4404a8d6db4d.png)


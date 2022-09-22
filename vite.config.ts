import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//允许setup语法糖中使用name
//https://zhuanlan.zhihu.com/p/481640259
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      createSvgIconsPlugin({
        // 配置路径在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
      VueSetupExtend(),
      //注入静态文件
      createHtmlPlugin({
        inject: {
          data: {
            urlScript: `${mode=='development'?'dev':'prod'}`,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      rollupOptions: {
        output: {
          sourcemap: false,
          manualChunks: {
            'element-plus': ['element-plus'],
            'lodash-es': ['lodash-es'],
            echarts: ['echarts']
          },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'js/[name].[hash].js',
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: 'js/[name].[hash].js',
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },
       
      }
    }
  }
})

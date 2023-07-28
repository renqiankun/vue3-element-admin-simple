import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//允许setup语法糖中使用name
//https://zhuanlan.zhihu.com/p/481640259
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createHtmlPlugin } from 'vite-plugin-html'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import legacy from '@vitejs/plugin-legacy' //低版本浏览器支持
//配置文件config拷贝
import { viteStaticCopy } from 'vite-plugin-static-copy'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      //复制配置文件
      viteStaticCopy({
        targets: [{ src: 'config/index-prod.js', dest: 'config/' }]
      }),
      //浏览器兼容性插件 配合build.target:'es2015'(默认modules)
      //额外多出兼容包、但是只有浏览器不支持时才会使用兼容包
      // legacy({
      //   targets: ['defaults', 'not IE 11'],
      // }),
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
            urlScript: `${mode == 'development' ? 'dev' : 'prod'}`
          }
        }
      })
      // AutoImport({
      //   resolvers: [ElementPlusResolver()]
      // }),
      // Components({
      //   resolvers: [
      //     ElementPlusResolver({
      //       importStyle: 'sass'
      //       // directives: true,
      //       // version: "2.1.5",
      //     })
      //   ]
      // })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "@/theme/element-variable.scss" as *;`
    //     }
    //   }
    // },
    server: {
      host: '0.0.0.0'
    },
    build: {
      // target: 'es2015',//配合 plugin-legacy 支持传统浏览器
      outDir: path.join(__dirname, 'dist'),
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      drop: command === 'build' ? ['console', 'debugger'] : [],
      rollupOptions: {
        output: {
          sourcemap: false,
          manualChunks: {
            'base-module': ['vue', 'vuex', 'vue-router', 'axios', 'lodash-es'],
            'element-plus': ['element-plus']
            // echarts: ['echarts']
          },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'js/[name].[hash].js',
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: 'js/[name].[hash].js',
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: '[ext]/[name].[hash].[ext]'
        }
      }
    }
  }
})

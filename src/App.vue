<template>
  <el-config-provider :size="config.size" :z-index="config.zIndex" :locale="config.locale">
    <router-view></router-view>
  </el-config-provider>
 <!-- 配置组件弹窗 -->
  <Setting />
</template>
<script setup lang="ts">
  import Setting from '@/components/Setting.vue'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { reactive } from 'vue'
  const config = reactive({ size: 'default', zIndex: 3000, locale: zhCn })
</script>
<style scoped lang="scss"></style>

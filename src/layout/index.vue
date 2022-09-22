<template>
  <el-container v-if="isHorizontal">
    <el-aside>
      <el-scrollbar height="100%">
        <Logo />
        <sidebar />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header><navbar /></el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>

  
  <el-container v-else>
    <el-header><navbar /></el-header>
    <el-container>
      <el-aside>
        <el-scrollbar height="100%">
          <sidebar />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
  import navbar from './components/navbar/index.vue'
  import sidebar from './components/sidebar/index.vue'
  import Main from './components/Main/Main.vue'
  import Logo from './components/Logo/index.vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  let store = useStore()
  let isHorizontal = computed(() => {
    return store.state.pro.isHorizontal
  })
</script>
<style lang="scss"></style>

<template>
  <div class="main-content">
    <Tabs v-if="useTabs" />
    <Breadcrumb v-if="useBread" />
    <div class="main-container">
      <el-scrollbar class="scroll-bar-wrap--reset">
        <div class="inner-wrap">
          <router-view v-slot="{ Component }">
            <keep-alive :include="keepName">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import Breadcrumb from '../Breadcrumb/index.vue'
  import Tabs from '../Tabs/index.vue'
  const store = useStore()
  const useTabs = computed(() => store.getters.useTabs)
  const useBread = computed(() => store.getters.useBread)
  const keepName = ref('test')
</script>

<style lang="scss" scoped>
  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0px;
    box-sizing: border-box;
    .main-container {
      flex: 1;
      overflow: hidden;
      height: 100%;
      .scroll-bar-wrap--reset {
        box-sizing: border-box;
        & > ::v-deep(.el-scrollbar__wrap) {
          & > .el-scrollbar__view {
            height: 100%;
            box-sizing: border-box;
            padding: 15px 15px;
            display: flex;
          }
        }
      }
    }
  }
  .inner-wrap {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
    padding: 15px;
    flex: 1;
    width: 100%;
    min-height:100%;
  }
</style>

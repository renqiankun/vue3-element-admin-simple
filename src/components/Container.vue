<template>
  <el-scrollbar v-if="full" :class="['scroll-pad', classList]" height="100%">
    <slot />
  </el-scrollbar>

  <div v-else class="container-wrap container-padding">
    <slot />

    <!-- 查询位置 -->
    <div class="container-search-wrap" v-if="slots.search">
      <slot name="search" />
    </div>
    <div :class="['container-main', classList]">
      <div class="btn" v-if="slots.header">
        <slot name="header" />
      </div>

      <div class="main">
        <slot name="main" />
      </div>

      <div class="footer" v-if="slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, useSlots } from 'vue'

  interface propsVal {
    mainShadow?: boolean
    mainBg?: boolean
    useMainPadding?: boolean
    full?: boolean
  }
  const props = withDefaults(defineProps<propsVal>(), {
    mainShadow: true,
    mainBg: true,
    useMainPadding: true,
    full: false
  })

  const classList = computed(() => {
    return {
      mainShadow: props.mainShadow,
      mainBg: props.mainBg,
      'main-padding': props.useMainPadding
    }
  })

  const slots = useSlots()
</script>

<style lang="scss" scoped>
  .container-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }
  .container-search-wrap {
    padding-bottom: 0;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 6px 0px rgba(0, 0, 0, 0.06),
      0px 4px 8px 2px rgba(0, 0, 0, 0.04);
    margin-bottom: 10px;
    // height: 50px;
    padding: 16px 16px 0;
  }
  .container-main {
    flex: 1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    /* box-shadow/light */
    box-sizing: border-box;
    overflow: hidden;
    &.mainShadow {
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 6px 0px rgba(0, 0, 0, 0.06),
        0px 4px 8px 2px rgba(0, 0, 0, 0.04);
    }
    &.mainBg {
      background: #ffffff;
    }
    &.main-padding {
      padding: 16px 32px;
    }
    .main {
      flex: 1;
      overflow: hidden;
    }
    .btn {
      text-align: right;
      padding-bottom: 16px;
    }
    // .footer {
    // }
  }

  .scroll-pad {
    box-sizing: border-box;
    border-radius: 4px;
    & > ::v-deep(.el-scrollbar__wrap) > .el-scrollbar__view {
      border-radius: 4px;
    }
    &.mainShadow > ::v-deep(.el-scrollbar__wrap) > .el-scrollbar__view {
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 6px 0px rgba(0, 0, 0, 0.06),
        0px 4px 8px 2px rgba(0, 0, 0, 0.04);
    }
    &.mainBg > ::v-deep(.el-scrollbar__wrap) > .el-scrollbar__view {
      background: #ffffff;
    }
    &.main-padding > ::v-deep(.el-scrollbar__wrap) > .el-scrollbar__view {
      padding: 16px 32px;
    }
  }
</style>
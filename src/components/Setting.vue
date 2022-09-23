<template>
  <div @click="drawer = true" class="setting-wrap-fix">
    <el-icon><Setting /></el-icon>
    <div>设置</div>
  </div>
  <el-drawer v-model="drawer" title="配置">
    <el-divider content-position="left">主题色</el-divider>
    <el-color-picker v-model="color" @change="setColor" />
    <el-popover
    ref="popover"
    placement="right"
    title="提示"
    :width="200"
    trigger="click"
    content="此处仅做动态修改演示 因未修改--el-color-primary-light-x的值会导致hover等颜色并没有改变，因此生产环境请直接修改src/theme/element-variable.scss/base的值"
  >
    <template #reference>
        <el-icon style="margin-left:20px"><QuestionFilled /></el-icon>
    </template>
  </el-popover>


    <el-divider content-position="left">结构配置</el-divider>
    <el-radio-group @change="setHorizontal" v-model="isHorizontal" class="ml-4">
      <el-radio label="1" size="large">左右</el-radio>
      <el-radio label="2" size="large">上下</el-radio>
    </el-radio-group>

    <el-divider content-position="left">使用tabs</el-divider>
    <el-radio-group @change="useTabsHand" v-model="useTabs" class="ml-4">
      <el-radio :label="true" size="large">使用</el-radio>
      <el-radio :label="false" size="large">禁用</el-radio>
    </el-radio-group>

    <el-divider content-position="left">使用面包屑</el-divider>
    <el-radio-group @change="useBreadHand" v-model="useBread" class="ml-4">
      <el-radio :label="true" size="large">使用</el-radio>
      <el-radio :label="false" size="large">禁用</el-radio>
    </el-radio-group>
  </el-drawer>
</template>

<script setup lang="ts">
  import { Setting ,QuestionFilled} from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  let store = useStore()
  let drawer = ref(false)
  let color = ref('#45c2b5')
  //修改主题色 此处仅做动态修改演示 因未修改--el-color-primary-light-x的值
  // 因此生产环境请直接修改src/theme/theme-variable.modele.scss/$systemThemeColor的值
  const setColor = () => {
    document.documentElement.style.setProperty('--el-color-primary', color.value)
  }

  let isHorizontal = ref('1')
  //修改布局结构
  let setHorizontal = () => {
    let isHorizontalVal = isHorizontal.value == '1'
    store.commit('pro/updateIsHorizontal', isHorizontalVal)
  }

  let useTabs = ref(true)
  let useTabsHand = () => {
    store.commit('pro/updateUseTabs', useTabs.value)
  }

  let useBread = ref(false)
  let useBreadHand = () => {
    store.commit('pro/updateUseBread', useBread.value)
  }
</script>

<style lang="scss" scoped>
  .setting-wrap-fix {
    position: fixed;
    right: 10px;
    z-index: 1;
    top: 50%;
    background: #f2f6fc;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
  }
</style>

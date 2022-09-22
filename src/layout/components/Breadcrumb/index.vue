<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <!-- <el-breadcrumb-item >首页</el-breadcrumb-item> -->
    <el-breadcrumb-item v-for="item in breadcrumb.list" :key="item.menuId">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import { computed, reactive, watchEffect } from 'vue'
  import { useStore } from 'vuex'
  import { ArrowRight } from '@element-plus/icons'
  const store = useStore()

  let breadcrumb = reactive<any>({
    list: []
  })

  const _getParentMenu: any = (list: Array<any>, path: any) => {
    for (let i in list) {
      if (list[i]?.path == path) {
        return [list[i]]
      }
      if (list[i]?.children) {
        let node = _getParentMenu(list[i].children, path)
        if (node !== undefined) {
          return node.concat(list[i])
        }
      }
    }
  }
  let menuTree = computed(() => store.getters.menuTree)
  let activeMenu = computed(() => store.getters.activeMenu)
  watchEffect(() => {
    var breadcrumbArr = _getParentMenu(menuTree.value, activeMenu.value) || []
    breadcrumb.list = breadcrumbArr.reverse()
  })
</script>

<style lang="scss" scoped></style>

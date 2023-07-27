<template>
  <el-menu  router :mode="mode"  :default-active="activeMenu" :unique-opened="true">
    <template v-for="item in menuTree">
      <sidebar-item v-if="!item.hide" :item="item" :key="item.menuId"></sidebar-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import { useStore } from 'vuex'
  import sidebarItem from './sidebar-item.vue'
  import { useRoute } from 'vue-router'

  interface Props {
    mode?: any
  }
  withDefaults(defineProps<Props>(), {
    mode: 'vertical'
  })
  const store = useStore()
  const route = useRoute()
  const updateActiveMenu = (data: any) => store.commit('pro/updateActiveMenu', data)
  let activeMenu = computed(() => store.getters.activeMenu)
  //激活menu为hide时尝试高亮父级
  var highlightParentMenu = computed(() => store.getters.highlightParentMenu)

  let menuTree = computed(() => store.getters.menuTree)
  let menuList: any = computed(() => store.getters.menuList)
  //菜單id map
  let menuIdMap: any = computed(() => {
    var map: any = {}
    menuList.value.forEach((item: any) => {
      map[item.menuId] = item
    })
    return map
  })
  //菜單path map
  let menuPathmap: any = computed(() => {
    var map: any = {}
    menuList.value.forEach((item: any) => {
      map[item.path] = item
    })
    return map
  })
  const resetMenuActive = () => {
    let path: any = route.path
    //不直接提交可以解决 menu不存在此路由时，menu失去高亮
    // store.commit('updateActiveMenu', path)
    var menu = menuPathmap.value?.[path]??{}
    //menu.hide时 此处尝试高亮父节点
    if (menu.hide && highlightParentMenu.value) {
      path = getParentItemById(menu) || path
    }
    updateActiveMenu(path)
    // store.commit('updateActiveMenu', path)
  }
  const getParentItemById = (childMenu: any) => {
    var parentMenu: any = menuIdMap.value[childMenu.parentId]
    return parentMenu.path || parentMenu.menuId || ''
  }
  watch(
    () => route.fullPath,
    (newVal, oldVal) => {
      resetMenuActive()
    },
    {
      immediate: true,
      flush: 'post'
      // deep: true
    }
  )
</script>

<style lang="scss" scoped></style>

<template>
  <!-- 叶子结点 -->
  <el-menu-item
    @click.capture.stop="handleMenu(item)"
    v-if="!hasChild"
    :index="item.path || item.menuId"
  >
    <span class="icon-pre">
      <el-icon style="margin-right: 0" :size="14"><Location /></el-icon>
    </span>
    <span>{{ item.title }}</span>
  </el-menu-item>

  <!-- 目录 -->
  <el-sub-menu :index="item.path || item.menuId" v-else>
    <template #title>
      <el-icon style="margin-right: 0" :size="14"><Location /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <template v-for="inner in item.children" :key="inner.menuId">
      <sidebar-item v-if="!inner.hide" :item="inner"></sidebar-item>
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
  import { Location } from '@element-plus/icons'
  import { computed, nextTick } from 'vue'
  import { useRouter } from 'vue-router'
  // const store = useStore()
  const router = useRouter()
  const props = defineProps<{
    item: any
  }>()
  let hasChild = computed(() => {
    //过滤隐藏的菜单
    var newChildren = props.item.children?.filter((item: any) => !item.hide)
    return newChildren?.length > 0
  })

  const handleMenu = async (menuItem: any) => {
    // const { menuId, title, path } = menuItem
    if (!menuItem.path) {
      return
    }
    // store.commit('updateActiveMenu', menuId + '')
    router.push({
      path: menuItem.path
    })
  }
</script>

<style lang="scss" scoped>
  .icon-pre {
    display: inline-block;
    min-width: 24px;
  }
</style>

<template>
  <el-tabs
    class="reset-tabs"
    v-model="dataForm.activeName"
    closable
    @tab-click="handleClick"
    @tab-remove="removeHand"
  >
    <el-tab-pane
      v-for="item in dataForm.tabList"
      :key="item.path"
      :label="item.meta.title || item.path"
      :name="item.path"
    ></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import { computed, reactive, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  const store = useStore()
  const router = useRouter()
  const route = useRoute()
  //首页路径
  let homePath = computed(()=>store.getters.homePath)
  const dataForm = reactive<any>({
    activeName: '',
    tabList: []
  })
  //菜單path map
  let menuPathmap: any = computed(() => {
    var map: any = {}
    store.getters.menuList.forEach((item: any) => {
      map[item.path] = item
    })
    return map
  })
  interface TabItem {
    path: String
    fullPath: String
    name: any
    meta: Object
    params: Object
    query: Object
  }
  //获取tab列表
  const resetTabList = () => {
    //tabs中存在当前路由
    var hasSamePath = dataForm.tabList.some((item: any) => item.path == route.path)
    dataForm.activeName = route.path
    var newTab: TabItem = {
      path: route.path,
      fullPath: route.fullPath,
      name: route.name,
      meta: route.meta,
      params: route.params,
      query: route.query
    }
    //不存在此路由 则添加
    if (!hasSamePath) {
      return dataForm.tabList.push(newTab)
    }
    //已存在则重置此路由
    dataForm.tabList = dataForm.tabList.map((item: any) => {
      if (item.path == route.path) {
        return newTab
      }
      return item
    })
  }
  //是否需要自动关闭上一个标签
  const checkNeedCloseOldTab = (oldPath: string) => {
    var menu = menuPathmap.value[oldPath] //上一个tab
    if (menu?.hide) {
      dataForm.tabList = dataForm.tabList.filter((item: any) => {
        return item.path !== oldPath
      })
    }
  }

  watch(
    () => [route.fullPath, route.path],
    (newVal, oldVal) => {
      resetTabList()
      checkNeedCloseOldTab(oldVal?.[1] || '')
    },
    {
      immediate: true,
      flush: 'post',
      deep: true
    }
  )
  //tab跳转
  const handleClick = (item: any) => {
    let { name } = item.props
    if (name === route.path) return //重复点击
    var [routeItems] = dataForm.tabList.filter((item: any) => {
      return item.path === name
    })
    router.push({
      ...routeItems
    })
  }
  //移除点击
  const removeHand = (path: any) => {
    if (dataForm.tabList.length == 1 && path == homePath.value) {
      return
    }
    //关闭标签的索引
    var currentIndex = dataForm.tabList.findIndex((item: any) => item.path == path)
    //获取之前 之后的tab
    var preTab = dataForm.tabList[currentIndex - 1]
    var nexTab = dataForm.tabList[currentIndex + 1]
    var currentTab = dataForm.tabList[currentIndex]
    dataForm.tabList = dataForm.tabList.filter((item: any) => {
      return item.path != path
    })
    //移除的非激活tab则直接移除后不需操作
    if (path != dataForm.activeName) {
      return
    }
    //当前tab上存在hide时 则在关闭时直接后退一步
    if (currentTab.meta.hide) {
      return router.go(-1)
    }
    //移除当前激活的tab时 且当前tab数大与0
    if (dataForm.tabList.length > 0) {
      var newTab = preTab || nexTab
      router.replace({
        ...newTab
      })
    } else {
      router.replace({
        path: homePath.value
      })
    }
  }
</script>

<style lang="scss" scoped></style>

<template>
  <el-button @click="addOrUpdateHand()" type="primary">查看详情</el-button>

  {{ text }}
  <br />
  <br />

  <el-button @click="toChild()" type="primary">跳转子页面</el-button> 
  <br />
  子页面菜单隐藏时（菜单配置hide:true），同时开启store.pro.highlightParentMenu (高亮父级)
  <br />
  则跳转后会尝试高亮父级，在退出子页面时，tabs会自动关闭
  <addOrUpdate ref="addRef" @cancel="cancelHand" @success="addSuccess" v-if="createVisible" />
</template>
<script setup lang="ts">
  import { nextTick, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import addOrUpdate from './addOrUpdate.vue'
  let router = useRouter()
  const createVisible = ref<boolean>(false)
  const addRef = ref<any>(null)
  const addOrUpdateHand = async (row?: any) => {
    createVisible.value = true
    await nextTick()
    addRef.value.init()
  }
  let text = ref('')
  const addSuccess = () => {
    console.log('success')
    text.value = '详情已提交'
  }
  const cancelHand = () => {
    text.value = '取消'
    console.log('cancelHand')
  }

  const toChild = () => {
    router.push({ path: '/test/text-child' })
  }
</script>
<style lang="scss" scoped></style>

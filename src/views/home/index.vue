<template>
  <el-button v-permission="['sys:btn','sys:no']" @click="showMenssa">首页</el-button>
  <el-button v-permission="['sys:no']" @click="showMenssa">test</el-button>
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  const showMenssa = () => {
    ElMessage.success('test')
  }
</script>

<style lang="scss" scoped></style>

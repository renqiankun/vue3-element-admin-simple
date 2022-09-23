<template>
  <el-button @click="showMenssa">首页</el-button>
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  const showMenssa = () => {
    ElMessage.success('test')
  }
</script>

<style lang="scss" scoped></style>

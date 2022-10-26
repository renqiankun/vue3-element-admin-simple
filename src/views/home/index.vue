<template>
  <el-button @click="showMenssa">首页</el-button>

  <img style="width:100px;height:100px" src="@/assets/img/bg.png" alt="">
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  const showMenssa = () => {
    ElMessage.success('test')
  }
</script>

<style lang="scss" scoped></style>

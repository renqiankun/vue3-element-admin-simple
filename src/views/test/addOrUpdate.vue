<template>
  <el-dialog align-center draggable v-model="dialogTableVisible" title="提示">
    <div>
      1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>1 <br/>
    </div>
    <template #footer>
      <div >
        <el-button @click="cancelHand">关闭</el-button>
        <el-button type="primary" @click="submitHand">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['success', 'cancel'])
  const dialogTableVisible = ref<boolean>(false)
  const init = () => {
    dialogTableVisible.value = true
  }
  const cancelHand = () => {
    dialogTableVisible.value = false
    emit('cancel')
  }
  const submitHand = () => {
    dialogTableVisible.value = false
    emit('success')
  }
  defineExpose({ init })
</script>

<style lang="scss" scoped></style>

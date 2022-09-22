<template>
  <div class="clearFix pager-wrap">
    <el-pagination
      class="pager-reset"
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :disabled="disabled"
      layout="total, sizes, prev, pager, next , jumper"
      :total="total"
      :small="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:currentPage', 'update:pageSize','change'])
  interface propsCheck {
    currentPage?: number | string
    pageSize?: number | string
    disabled?: boolean
    total?: number | string
  }

  withDefaults(defineProps<propsCheck>(), {
    total: 0,
    currentPage: 1,
    pageSize: 20,
    disabled: false
  })
  //当前页变化
  const handleCurrentChange = (val: number) => {
    emit('update:currentPage',val)
    emit('change')
  }
  //每页条数变化
  const handleSizeChange = (val: number) => {
    emit('update:currentPage',1)//设置为第一页
    emit('update:pageSize',val)//设置为第一页
    emit('change')
  }
</script>

<style lang="scss" scoped>
  .pager-reset {
    float: right;
  }
  .pager-wrap{
    padding-top: 12px;
  }
</style>

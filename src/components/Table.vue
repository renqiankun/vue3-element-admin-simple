<template>
  <el-table ref="tableRef" v-bind="$attrs" height="100%" style="width: 100%">
    <template v-for="item in tableCol">
      <el-table-column
        v-bind="item"
        :align="item.align || 'center'"
        :headerAlign="item['headerAlign'] || item['header-align'] || 'center'"
        :show-overflow-tooltip="
          item['show-overflow-tooltip'] === undefined ? true : item['show-overflow-tooltip']
        "
      >
        <!-- 索引 -->
        <template #default="scope" v-if="item.type == 'index' && !$slots['index']">
          {{ (currentPage - 1 < 0 ? 0 : currentPage - 1) * pageSize + scope.$index + 1 }}
        </template>
        <template v-if="$slots[item.prop]" #default="scope">
          <slot :name="item.prop" v-bind="scope">{{ scope.row[item.prop] }}</slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface Props {
    tableCol: any
    currentPage?: number
    pageSize?: number
  }
  withDefaults(defineProps<Props>(), {
    tableCol: [],
    currentPage: 1,
    pageSize: 0
  })
  const tableRef = ref<any>(null)
  //抛出当前table实例
  const getRefHand = () => {
    return tableRef || null
  }
  defineExpose({ getRefHand })
</script>

<style lang="scss" scoped></style>

<template>
  <el-table ref="tableRef" :highlight-current-row="highlightCurrentRow" :border="border" :stripe="stripe" v-bind="$attrs" :data="data" @row-click="rowClickHand" style="width: 100%" :class="{ 'table--reset': true, 'table-radio': radio }">
    <template v-for="item in tableCol">
      <el-table-column v-bind="item" :align="item.align || 'center'" :headerAlign="item['headerAlign'] || item['header-align'] || 'center'" :show-overflow-tooltip="item['show-overflow-tooltip'] === undefined && item['type'] != 'selection'
          ? true
          : item['show-overflow-tooltip']
        ">
        <template #default="scope">
          <!-- 单选-->
          <template v-if="item.type == 'selection' && !$slots['selection'] && radio">
            <slot :name="item.prop" v-bind="scope">
              <el-radio style="margin: 0 auto" :label="true" :modelValue="scope.store.isSelected(scope.row)">
                {{ '' }}
              </el-radio>
            </slot>
          </template>
          <!-- 索引 -->
          <template v-else-if="item.type == 'index' && !$slots['index']">
            <slot :name="item.prop" v-bind="scope">
              {{ (currentPage - 1 < 0 ? 0 : currentPage - 1) * pageSize + scope.$index + 1 }} </slot>
          </template>
          <!-- 文字内容 -->
          <template v-else-if="$slots[item.prop]">
            <slot :name="item.prop" v-bind="scope">{{ scope.row[item.prop] }}</slot>
          </template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script setup lang="ts" name="Table">
import { nextTick, ref, useAttrs, watch } from 'vue'
interface TableColInt {
  type?: any
  label?: any
  prop?: any
  width?: any
  labelWidth?: any
  align?: any
  headerAlign?: any
  [key: string]: any
}
type Props = {
  tableCol: Array<TableColInt>
  data: Array<any>
  currentPage?: number
  pageSize?: number
  radio?: boolean
  border?: boolean
  stripe?: boolean
  highlightCurrentRow?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  tableCol: () => [],
  data: () => [],
  currentPage: 1,
  pageSize: 0,
  radio: false,
  border: false,
  stripe: false,
  highlightCurrentRow: true,

})
const tableRef: any = ref<any>(null)

const rowClickHand = (row: any, column: any, event: any) => {
  if (row && !row.readFlag) {
    if (props.radio) {
      tableRef.value.clearSelection()
    }
    tableRef.value.toggleRowSelection(row, undefined)
  }
  emits('row-click', row, column, event)
}
/*  抛出当前table实例 */
const getRefHand = () => {
  return tableRef.value || null
}
const emits = defineEmits(['row-click'])
defineExpose({ getRefHand, tableRef, ref: tableRef })
</script>
<style lang="scss" scoped>
.table-radio {
  ::v-deep(.el-table__header) {
    .el-table-column--selection .el-checkbox {
      opacity: 0;
      pointer-events: none;
    }
  }
}
// .table--reset {
//   ::v-deep(.el-table__header-wrapper) {
//     .el-table-column--selection > .cell {
//       display: flex;
//     }
//   }
//   ::v-deep(.el-table__body-wrapper) {
//     .el-table-column--selection > .cell {
//       display: flex;
//     }
//   }
// }
</style>

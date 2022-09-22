<template>
  <el-date-picker
    v-bind="$attrs"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    @update:modelValue="timeChange"
    :value-format="$attrs.type == 'daterange' ? 'YYYY-MM-DD' : undefined"
  />
</template>

<script setup lang="ts">
  import { useAttrs } from 'vue'
  const attrs = useAttrs()
  const emit = defineEmits(['change', 'update:modelValue'])
  interface Props {
    useFull?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    useFull: true
  })
  const timeChange = (e: any) => {
    if (attrs.type == 'daterange' && props.useFull && e && e[0]) {
      var timeRange = [`${e[0]} 00:00:00`, `${e[1]} 23:59:59`]
      emit('update:modelValue', timeRange)
      emit('change', timeRange)
    } else {
      emit('update:modelValue', e)
      emit('change', e)
    }
  }
</script>

<style lang="scss" scoped></style>

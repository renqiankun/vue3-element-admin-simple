<template>
  <!-- 此处需使用v-model 传入一个无用处的值仅用于承载数据 -->
  <el-input v-model="initValue" type="text" ref="inputRef" v-bind="$attrs">
    <template #suffix>
      <el-icon v-if="showPassword">
        <View v-if="!isPassword" @click="changePasswordTypeHand('password')" />
        <Hide v-else @click="changePasswordTypeHand('text')" />
      </el-icon>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { NicePassWord } from './password'
import { ElIcon } from 'element-plus'
import { View, Hide } from '@element-plus/icons-vue'
const props = withDefaults(defineProps<{
  modelValue: any
  showPassword?: boolean
}>(), {
  showPassword: false
})
let initValue = ref('')
let inputRef = ref()
onMounted(() => {
  init()
})
let inputInstance: any = ''
const init = () => {
  let node = inputRef.value.ref
  inputInstance = new NicePassWord(node, {
    symbol: '•',
    callback: () => {
      emits('update:modelValue', inputInstance.value)
    }
  })
  // 初始化值
  inputInstance.$setValue(props.modelValue)
}
let initType = ref('password')
let isPassword = computed(() => {
  return initType.value == 'password'
})
const changePasswordTypeHand = (type: 'text' | 'password') => {
  initType.value = type
  inputInstance?.$changeType(type)
}
const emits = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
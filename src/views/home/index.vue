<template>
  <div>原生input 请使用:modelValue</div>
  <input id="demo" type="text" :modelValue="password" />
  <el-button v-permission="['sys:btn', 'sys:no']" @click="showValue">获取值</el-button>
  <div> 
    <br>基于element-plus el-input， 封装内部需使用v-model</div>
  <inputPassword showPassword v-model="password2" />
  <el-button v-permission="['sys:btn', 'sys:no']" @click="showValue2">获取值2</el-button>
  <br>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NicePassWord } from '@/components/input-password/password'
import inputPassword from '@/components/input-password/input-password.vue';

let password = ref('init')
let input: any = ''
onMounted(() => {
  let node = document.querySelector('#demo')
  input = new NicePassWord(node, {
    symbol: '•',
    callback: () => {
      password.value = input.value
    }
  })
  input.$setValue(password.value)

})

const showValue = () => {
  console.log(111, input.value)
}
let password2 = ref('sss')
const showValue2 = () => {
  console.log(222, password2.value)
}


</script>

<style lang="scss" scoped></style>

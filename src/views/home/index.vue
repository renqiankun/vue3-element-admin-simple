<template>
    <inputPassword showPassword v-model="password2" />
    {{ password2 }}
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { inputPassword ,InputPassword} from 'vue3-input-password';
let password2 = ref('init')

</script>

<style lang="scss" scoped></style>

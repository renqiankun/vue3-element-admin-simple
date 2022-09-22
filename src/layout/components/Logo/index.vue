<template>
  <div class="logo-wrap">
    <div class="logo-inner">
        管理系统
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .logo-wrap {
    height: var(--navbarHeight);
    width: 100%;
  }
  .logo-inner {
    height: var(--navbarHeight);
    background-color: var(--systemThemeColor);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
  }
</style>

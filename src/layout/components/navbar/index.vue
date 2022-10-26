<template>
  <div class="header-wrap">
    <div class="left-wrap">
      <span class="nav-text">管理系统</span>
    </div>
    <!-- <div class="sidebar-wrap">
       <sidebar  mode='horizontal'/>
    </div> -->
    <div class="right-wrap">
      <el-badge :hidden="value <= 0" :value="12">
        <svg-icon icon-size="16" icon-name="Bell" />
      </el-badge>
      <div class="avtor-wrap">
        <el-avatar shape="circle" :size="28" fit="cover" :src="defaultHeader" />
        <el-dropdown :hide-on-click="false">
          <span class="name-wrap">
            <span class="name-text">admin</span>
            <el-icon :size="10"><CaretBottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CaretBottom } from '@element-plus/icons-vue'
  import defaultHeader from '@/assets/img/header-default.png'
  import sidebar from '../sidebar/index.vue'
  import { ref } from 'vue'
  var value = ref(2)
</script>

<style lang="scss" scoped>
  .header-wrap {
    height: 100%;
    // box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08), 0px 2px 6px 0px rgba(0, 0, 0, 0.06),
    //   0px 4px 8px 2px rgba(0, 0, 0, 0.04);
    display: flex;
    box-shadow: 0 1px 3px rgb(0 0 0 / 8%);
    align-items: center;
    box-sizing: border-box;
    padding: 0 32px;
    // background-color: #fff;
    justify-content: flex-start;
    .sidebar-wrap{
      flex: 1;
    }
    .right-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      // width: 100%;
      margin-left: auto;
    }
    .avtor-wrap {
      margin-left: 43px;
      align-items: center;
      display: flex;
    }
    .name-wrap {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      font-weight: normal;
      // color: #3d3d3d;
    }
    .name-text {
      margin: 0 10px 0 10px;
    }
  }
  .left-wrap {
    display: flex;
    align-items: center;
  }
  .logo-img {
    width: 95px;
    display: block;
    margin-right: 26px;
  }
  .logo-text {
    width: 168px;
    // margin-left: 26px;
  }
  .nav-text {
    font-size: 16px;
    font-weight: bold;
    // color: #114357;
    white-space: nowrap;
    line-height: 30px;
  }
</style>

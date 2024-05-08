<template>
  <div class="flex items-center justify-center">
    <el-dropdown trigger="click">
      <el-icon><ArrowDownBold /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Refresh" @click="refresh">刷新</el-dropdown-item>
          <el-dropdown-item :icon="FullScreen" @click="handleFullScreen"> 最大化 </el-dropdown-item>
          <el-dropdown-item divided :icon="Remove">关闭当前</el-dropdown-item>
          <el-dropdown-item :icon="DArrowLeft">关闭左侧</el-dropdown-item>
          <el-dropdown-item :icon="DArrowRight">关闭右侧</el-dropdown-item>
          <el-dropdown-item divided :icon="CircleClose">关闭其他</el-dropdown-item>
          <el-dropdown-item :icon="FolderDelete">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { inject, nextTick } from "vue";
import {
  ArrowDownBold,
  Refresh,
  FullScreen,
  Remove,
  DArrowLeft,
  DArrowRight,
  CircleClose,
  FolderDelete
} from "@element-plus/icons-vue";

import screenfull from "screenfull";

const refreshCurrentPage: Function = inject("refreshPage") as Function;
const refresh = () => {
  setTimeout(() => {
    refreshCurrentPage(false);
    nextTick(() => {
      refreshCurrentPage(true);
    });
  }, 0);
};

const handleFullScreen = () => {
  screenfull.toggle();
};
</script>

<style scoped></style>

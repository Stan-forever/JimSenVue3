<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";

import zhCn from "element-plus/dist/locale/zh-cn.mjs"; //中文化

import { useTheme } from "@/hooks/useTheme";

// init theme
const { initTheme } = useTheme();

const locale = computed(() => {
  return zhCn;
});

onMounted(() => {
  initTheme();
});
</script>

<style scoped></style>

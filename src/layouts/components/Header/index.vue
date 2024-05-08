<template>
  <div class="flex justify-between">
    <div></div>
    <div class="flex">
      <ThemeSetting @handle-theme-config="handleThemeConfig" />
      <ThemeDrawer ref="themeDrawerRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ThemeSetting from "./components/ThemeSetting.vue";
import ThemeDrawer from "../ThemeDrawer/index.vue";

const themeDrawerRef = ref<InstanceType<typeof ThemeDrawer> | null>(null);

const handleThemeConfig = () => {
  const params = {
    title: "主题配置",
    visible: true
  };
  themeDrawerRef.value?.acceptParams(params);
};
</script>

<style scoped></style>

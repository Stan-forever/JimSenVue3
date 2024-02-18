<template>
  <div>
    <el-switch v-model="isDark" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";

import { useGlobalStore } from "@/stores/modules/global";
import { useTheme } from "@/hooks/useTheme";

const globalStore = useGlobalStore();

// const isDark = ref(globalStore.isDark);
const isDark = computed(() => {
  return globalStore.isDark;
});

const { switchDark } = useTheme();

const handleChange = () => {
  globalStore.switchDark();
  switchDark();
};
</script>

<style scoped></style>

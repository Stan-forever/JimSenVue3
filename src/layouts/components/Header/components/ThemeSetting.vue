<template>
  <div>
    <el-icon style="font-size: 24px" class="cursor-pointer" @click="handleThemeConfig"><Setting /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { Setting } from "@element-plus/icons-vue";

const emit = defineEmits<{
  (e: "handleThemeConfig"): void;
}>();

const handleThemeConfig = () => {
  emit("handleThemeConfig");
};
</script>

<style scoped></style>

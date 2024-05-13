<template>
  <div>
    <el-button type="primary" @click="handlePreview"> preview </el-button>
    <PreviewDialog v-model:visible="previewVisible" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PreviewDialog from "./components/PreviewDialog.vue";

const previewVisible = ref(false);

const handlePreview = () => {
  previewVisible.value = true;
};
</script>

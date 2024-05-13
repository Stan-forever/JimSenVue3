<template>
  <el-dialog :model-value="visible" title="弹窗1" width="60%" @close="handleClose" destroy-on-close>
    <vue-office-pdf :src="pdf" style="height: 100vh" @rendered="renderedHandler" @error="errorHandler" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

import VueOfficePdf from "@vue-office/pdf";

const pdf = ref("http://static.shanhuxueyuan.com/test.pdf");

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

const handleClose = () => {
  emit("update:visible", false);
};

const renderedHandler = () => {
  console.log("渲染完成");
};

const errorHandler = () => {
  console.log("渲染失败");
};
</script>

<style scoped></style>

<template>
  <div>
    <el-button @click="dialogVisible = true">show</el-button>
    <el-button @click="visible = true">show2</el-button>
    <Dialog v-model:visible="dialogVisible" />
    <DefineModelDialog v-model:visible="visible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Dialog from "./Dialog.vue";
import DefineModelDialog from "./DefineModelDialog.vue";

const dialogVisible = ref(false);
const visible = ref(false);
</script>

<style scoped></style>

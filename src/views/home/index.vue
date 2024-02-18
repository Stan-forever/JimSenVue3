<template>
  <div>Home</div>
  <el-button @click="router.push('/dataScreen')">Push</el-button>
  <el-button type="primary" @click="resetToken">ResetToken</el-button>
  <el-button type="primary" @click="openPdf">openPdf</el-button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/modules/user";

import { useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();

const resetToken = () => {
  userStore.setToken("");
};

const openPdf = () => {
  window.open("./1.pdf");
};

onMounted(() => {});
</script>

<style scoped lang="scss"></style>

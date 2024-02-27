<template>
  <div>Home</div>
  <el-button @click="router.push('/dataScreen')">Push</el-button>
  <el-button type="primary" @click="resetToken">ResetToken</el-button>
  <el-button type="primary" @click="openPdf">openPdf</el-button>
  <!-- <div class="rectangle"></div> -->
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/modules/user";

import { useRouter } from "vue-router";

import PrototyeEnum from "./prototypeEnum";

const userStore = useUserStore();

const router = useRouter();

const resetToken = () => {
  userStore.setToken("");
};

const openPdf = () => {
  window.open("./1.pdf");
};

const typeFn = (type: any) => {
  return Object.prototype.toString.call(type);
};

onMounted(() => {
  typeFn([]);
  //   console.log(PrototyeEnum[typeFn([])]);
  console.log(PrototyeEnum[typeFn(typeFn)]);
});
</script>

<style scoped lang="scss">
.rectangle {
  width: 100px;
  height: 100px;
  border: 50px solid transparent;

  border-top: 50px solid yellowgreen;
  /* border-bottom: 50px solid deeppink;
  border-left: 50px solid bisque;
  border-right: 50px solid chocolate; */
}
</style>

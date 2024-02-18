<template>
  <el-button @click="debounceClickFn" type="primary">debounceClick</el-button>
  <el-button @click="throttleClickFn" type="primary">throttleClick</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";

import { useAuthStore } from "@/stores/modules/auth";

const authStore = useAuthStore();

const finalArr = ref<any[]>([]);

const recursionFn = (targetArr: any) => {
  targetArr.forEach(item => {
    finalArr.value.push(item);
    if (item.children?.length) {
      recursionFn(item.children);
    }
  });
};

let timer: NodeJS.Timeout | null = null;
const debounceClick = (fn: Function) => {
  if (timer) clearInterval(timer);
  timer = setTimeout(() => {
    fn();
  }, 1000);
};

let currentTime = Date.now();
const throttleClick = (fn: Function) => {
  let nowTime = Date.now();
  if (nowTime - currentTime >= 1000) {
    currentTime = Date.now();
    fn();
  }
};

const debounceClickFn = () => {
  function logFn() {
    ElMessage.success("防抖");
  }
  debounceClick(logFn);
};

const throttleClickFn = () => {
  function logFn() {
    ElMessage.success("节流");
  }
  throttleClick(logFn);
};

onMounted(() => {
  recursionFn(authStore.menu);
});
</script>

<style scoped></style>

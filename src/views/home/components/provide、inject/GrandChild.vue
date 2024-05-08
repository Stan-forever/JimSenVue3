<template>
  <div>
    <el-button @click="handleClick">{{ num }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const { num, numAddFn } = inject("num", 0);

const handleClick = () => {
  console.log("num", num);
  console.log("numAddFn", numAddFn);

  numAddFn();
};
</script>

<style scoped></style>

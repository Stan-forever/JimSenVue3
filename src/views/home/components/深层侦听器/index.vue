<template>
  <div>
    <el-button @click="obj.numObj.id++">{{ obj.numObj.id }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

const obj = reactive({
  numObj: {
    id: 1
  }
});

watch(
  () => obj.numObj,
  () => {
    console.log("change");
  },
  {
    deep: true
  }
);
</script>

<style scoped></style>

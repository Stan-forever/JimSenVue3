<template>
  <div>
    <Child />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";

import Child from "./Child.vue";

const num = ref(0);
const numAddFn = () => {
  num.value += 1;
};

provide("num", {
  num,
  numAddFn
});
</script>

<style scoped></style>

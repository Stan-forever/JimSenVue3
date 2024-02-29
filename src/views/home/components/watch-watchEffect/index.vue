<template>
  <div>
    <el-button @click="handleNum1Add">{{ num1 }}</el-button>
    <el-button @click="handleNum2Add">{{ num2 }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { watch, watchEffect, ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const num1 = ref(0);
const num2 = ref(0);
const effectNum = ref(0);

const handleNum1Add = () => {
  num1.value += 1;
};

const handleNum2Add = () => {
  num2.value += 1;
};

const handleNum2Increase = () => {
  effectNum.value = num2.value + 2;
};

watch(
  () => num1.value,
  () => {
    console.log("num1 + 1", num1.value + 1);
  }
);

watchEffect(() => {
  handleNum2Increase();
  console.log("effect", effectNum.value);
});
</script>

<style scoped></style>

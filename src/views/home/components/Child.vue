<template>
  <div>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
    <div>{{ state.num }}</div>
    <el-button type="primary" @click="() => state.num++">Click</el-button>
    <div>now:{{ now }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";

const props = defineProps<{
  id: number;
  name: string;
}>();

type StateType = {
  num: number;
};
const num = ref(0);
const state: StateType = reactive({
  num
});

const refTime = ref(Date.now());
const now = computed(() => refTime.value);
</script>

<style scoped></style>

<template>
  <div class="flex h-full gap-3" :isDiyStyle="true">
    <div class="h-full p-4" style="background: #fff; flex: 1">
      <el-scrollbar>
        <LeftTree />
      </el-scrollbar>
    </div>
    <div class="h-full p-4" style="background: #fff; flex: 3">
      <el-button @click="handleClick" type="primary">click</el-button>
      <CenterContent />
      <FirstDialog @update="(val: boolean) => (firstDialogVisible = val)" @next="handleNext" ref="firstDialogRef" />
      <SecondDialog ref="secondDialogRef" @back="handleBack" />
    </div>
    <div class="h-full p-4" style="background: #fff; flex: 1"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import LeftTree from "./modules/leftTree.vue";
import CenterContent from "./modules/centerContent.vue";
import FirstDialog from "./modules/firstDialog.vue";
import SecondDialog from "./modules/secondDialog.vue";

import { FormType } from "./modules/firstDialog.vue";

const firstDialogVisible = ref(false);
const secondDialogVisible = ref(false);

const firstDialogRef = ref<InstanceType<typeof FirstDialog> | null>(null);
const secondDialogRef = ref<InstanceType<typeof SecondDialog> | null>(null);
const handleClick = () => {
  firstDialogRef.value?.acceptParams(true);
};
const handleNext = (data: FormType) => {
  firstDialogRef.value?.acceptParams(true);
  secondDialogRef.value?.acceptParams(true, data);
};

const handleBack = (data: FormType) => {
  secondDialogRef.value?.acceptParams(false);
  firstDialogRef.value?.acceptParams(true, data);
};
</script>

<style scoped></style>

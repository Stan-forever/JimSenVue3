<template>
  <!-- <div> -->
  <el-dialog v-bind="$attrs" v-model="visible" @close="handleClose" :title="dialogParams.title">
    <template #footer>
      <el-button @click="handleClose">关闭</el-button>
    </template>
  </el-dialog>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

interface ParamsType {
  title: string;
  otherParams?: any;
}

const visible = ref(false);
const dialogParams = ref<ParamsType>({
  title: "",
  otherParams: {}
});

const handleClose = () => {
  visible.value = false;
};

const handleOpen = (params: ParamsType) => {
  visible.value = true;
  dialogParams.value = { ...params };
};

defineExpose({
  handleOpen
});
</script>

<style scoped></style>

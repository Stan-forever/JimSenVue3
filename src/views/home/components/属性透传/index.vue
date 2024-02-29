<template>
  <div>
    <Attr class="white-color" id="attr-id" @click="() => console.log('click')" />
    <AttrsDialog ref="attrsDialogRef" @open="openFn" />
    <el-button @click="handleOpen">open</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Attr from "./Attr.vue";
import AttrsDialog from "./AttrsDialog.vue";

const attrsDialogRef = ref();
const handleOpen = () => {
  const params = {
    title: "透传弹窗",
    otherParams: {
      id: 1
    }
  };
  attrsDialogRef?.value && attrsDialogRef.value.handleOpen(params);
};

const openFn = () => {
  if (attrsDialogRef?.value) {
    console.log("attrsDialogRef?.value", attrsDialogRef?.value);
  }
};
</script>

<style lang="scss" scoped></style>

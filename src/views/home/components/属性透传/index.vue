<template>
  <div>
    <Attr class="white-color cursor-pointer" id="attr-id" @click="() => console.log('click')" />
    <AttrsDialog ref="attrsDialogRef" @open="openFn" />
    <el-button @click="handleOpen">open</el-button>
    <el-divider></el-divider>
    <AttrForm ref="attrFormRef" label-width="180px" />
    <el-button @click="handleFormLog"> handleFormLog </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Attr from "./Attr.vue";
import AttrsDialog from "./AttrsDialog.vue";
import AttrForm from "./AttrForm.vue";

const attrsDialogRef = ref();
const attrFormRef = ref<InstanceType<typeof AttrForm> | null>(null);

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

const handleFormLog = () => {
  //   console.log("attrFormRef", attrFormRef.value?.resetForm());
  attrFormRef.value?.resetForm();
};
</script>

<style lang="scss" scoped></style>

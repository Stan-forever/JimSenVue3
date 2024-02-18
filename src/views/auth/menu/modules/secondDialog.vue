<template>
  <el-dialog :model-value="visible" title="弹窗2" width="30%" @close="handleClose" destroy-on-close>
    <el-form :model="form" ref="formRef">
      <el-form-item label="商品名" prop="goodsName">
        <el-input v-model="form.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="到付" prop="isPayed">
        <el-radio-group v-model="form.isPayed">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="价格区间" prop="price">
        <el-select v-model="form.price">
          <el-option v-for="item in priceList" :label="item.name" :value="item.value" :key="item.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleBack">上一步</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

import { FormType as FirstFormType } from "./firstDialog.vue";

const emit = defineEmits<{
  //   update: [value: boolean];
  //   back: [data: FirstFormType];
  (e: "update", value: boolean): void;
  (e: "back", data: FirstFormType): void;
}>();

const visible = ref(false);

interface FormType {
  goodsName: string;
  isPayed: boolean | undefined;
  price: string;
}

const formRef = ref<FormInstance>();
const form = reactive<FormType>({
  goodsName: "",
  isPayed: undefined,
  price: ""
});
const firstFormData = ref<FirstFormType>();

const resetForm = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};

const handleClose = () => {
  resetForm();
  visible.value = false;
};

const handleCancel = () => {
  handleClose();
};

const handleBack = () => {
  emit("back", firstFormData.value as FirstFormType);
};

const priceList = [
  { name: "0-3￥", value: "0-3￥" },
  { name: "4-10￥", value: "4-10￥" },
  { name: "10￥往上", value: "10￥往上" }
];

const acceptParams = (isShow: boolean, params?: FirstFormType) => {
  visible.value = isShow;
  firstFormData.value = params;
};

const handleSave = () => {
  let obj = { ...firstFormData.value, ...form };
  console.log("obj", obj);
};

defineExpose({
  acceptParams
});
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

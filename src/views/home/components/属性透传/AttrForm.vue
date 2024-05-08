<template>
  <div>
    <el-form :model="form" ref="formRef" v-bind="$attrs" :rules="rules">
      <el-form-item label="姓名 :" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话 :" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-button @click="handleClear(formRef)">clear</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const form = ref({
  name: "",
  tel: ""
});
const formRef = ref<FormInstance>();

const rules = reactive<FormRules<typeof form>>({
  name: [
    {
      required: true,
      message: "请输入"
    }
  ],
  tel: [
    {
      required: true
    }
  ]
});

const resetForm = () => {
  console.log("formRef", formRef.value);
  formRef.value?.resetFields();
};

const handleClear = (formRef: FormInstance | undefined) => {
  if (!formRef) return;
  console.log("handleClear", formRef);
  formRef.resetFields();
};

defineExpose({
  resetForm
});
</script>

<style scoped></style>

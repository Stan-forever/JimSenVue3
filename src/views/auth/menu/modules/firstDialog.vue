<template>
  <el-dialog :model-value="visible" title="弹窗1" width="30%" @close="handleClose" destroy-on-close>
    <el-form :model="state.form" ref="formRef" :rules="rules">
      <el-form-item label="名字" prop="name">
        <el-input v-model="state.form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="state.form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="省区" prop="area">
        <el-select v-model="state.form.area">
          <el-option v-for="item in areaList" :label="item.name" :value="item.value" :key="item.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleNext(formRef)">下一步</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

// const props = defineProps<{
//   visible: boolean;
// }>();
const visible = ref(false);

const emit = defineEmits<{
  update: [value: boolean];
  next: [data: FormType];
}>();

export interface FormType {
  name: string;
  sex: 0 | 1;
  area: string;
}

interface StateType {
  form: FormType;
}
const formRef = ref<FormInstance>();
const state = reactive<StateType>({
  form: {
    name: "",
    sex: 0,
    area: ""
  }
});

const rules = reactive<FormRules<FormType>>({
  name: [{ required: true, trigger: "blur", message: "请输入名称" }],
  sex: [{ required: true, trigger: "change", message: "请选择性别" }],
  area: [{ required: true, trigger: "change", message: "请选择地区" }]
});

const resetForm = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};

const handleClose = () => {
  resetForm();
  //   emit("update", false);
  visible.value = false;
};

const handleCancel = () => {
  handleClose();
};

const areaList = [
  { name: "Fujian", value: "fujian" },
  { name: "GuanDong", value: "guangdong" },
  { name: "HuNan", value: "hunan" }
];

const handleNext = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) emit("next", state.form);
  });
};

const acceptParams = (isShow: boolean, data?: FormType) => {
  visible.value = isShow;
  if (data) {
    state.form = data;
  }
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

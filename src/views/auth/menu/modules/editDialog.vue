<template>
  <el-dialog :model-value="visible" :title="state.title" width="30%" @close="handleClose" destroy-on-close>
    <el-form :model="state.form" ref="formRef" :rules="rules">
      <template v-for="item in Object.keys(state.form).filter(item => item != 'id')">
        <el-form-item :label="labelObj[item]" :prop="item">
          <component :is="elTypeObj[item]" v-model="state.form[item]">
            <template v-if="elTypeObj[item] === 'el-select'">
              <component
                :is="'el-option'"
                v-for="item in Object.keys(addrList)"
                :label="addrList[item]"
                :key="item"
                :value="item"
              ></component>
            </template>
          </component>
        </el-form-item>
      </template>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="resetForm">重置</el-button>
        <el-button type="primary" @click="handleSave()">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

import { RowDataType as FormType } from "./centerContent.vue";

import { addrList } from "../mock/index";

const visible = ref(false);

const emit = defineEmits<{
  save: [data: FormType];
  //   update: [value: boolean];

  //   (e: "save", data: Partial<FormType>): void;
}>();

interface StateType {
  form: FormType;
  title: string;
}
const formRef = ref<FormInstance>();
const state = reactive<StateType>({
  form: {
    name: "",
    age: undefined,
    addr: "",
    tel: undefined,
    id: ""
  },
  title: ""
});
const rules = reactive<FormRules<FormType>>({
  name: [{ required: true, trigger: "blur", message: "请输入名称" }]
});

let labelObj = {
  name: "名字",
  age: "年龄",
  addr: "地址",
  tel: "电话"
};

let elTypeObj = {
  name: "el-input",
  age: "el-input-number",
  addr: "el-select",
  tel: "el-input"
};

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

const handleSave = () => {
  //   if (!formEl) return;
  //   await formEl.validate(valid => {
  //     if (valid) emit("next", state.form);
  //   });
  emit("save", state.form);
  handleClose();
};

const acceptParams = (isShow: boolean, title: string, data?: FormType) => {
  //   resetForm();
  state.title = title;
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

<template>
  <div class="flex main-container">
    <div class="main-content">
      <div class="login-box">
        <el-form size="large" class="mt-4" :model="form" :rules="formRules" ref="formRef">
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="form.username">
              <template #prefix>
                <SvgIcon name="username" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password"
            ><el-input placeholder="请输入密码" v-model="form.password" type="password">
              <template #prefix>
                <SvgIcon name="password" />
              </template> </el-input
          ></el-form-item>
        </el-form>
        <div class="flex justify-between">
          <el-button type="primary" class="w-44" size="large" round @click="handleLogin(formRef)">登录</el-button>
          <el-button class="w-44" size="large" round>注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import { useRouter } from "vue-router";

import type { FormInstance, FormRules } from "element-plus";

import SvgIcon from "@/components/SvgIcon/index.vue";

import { loginApi } from "@/services/modules/auth";

import { useUserStore } from "@/stores/modules/user";

interface FormType {
  username: string;
  password: string;
}
const form = ref<FormType>({
  username: "",
  password: ""
});

const formRules = reactive<FormRules<FormType>>({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "请输入用户名"
    }
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      message: "请输入密码"
    }
  ]
});

const formRef = ref<FormInstance>();

const userStore = useUserStore();

const router = useRouter();

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await loginApi({ ...form.value });
      userStore.setToken(res.data.token);
      router.push("/home/index");
    } else {
    }
  });
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
  padding: 24px;
  background-image: url("@/assets/images/login_bg.svg");
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;

  .main-content {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box {
      width: 420px;
      padding: 40px 40px 45px;
      background-color: var(--el-bg-color);
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px 2px;
    }
  }
}
</style>

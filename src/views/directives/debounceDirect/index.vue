<!-- <template>
  <el-upload action="#" v-model:file-list="paramValue" multiple="false" accept=".conf,.keytab" show-file-list>
    <el-button type="primary" plain :icon="Upload">上传附件</el-button>
  </el-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Upload } from "@element-plus/icons-vue";

const paramValue = ref([]);
</script>

<style scoped></style> -->

<template>
  <el-upload
    ref="uploadRef"
    :multiple="false"
    accept=".conf,.keytab"
    :before-upload="handleChange"
    class="upload-demo"
    action="#"
    :auto-upload="true"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>

    <!-- <el-button class="ml-3" type="success" @click="submitUpload"> upload to server </el-button> -->

    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
  <el-button @click="getFile">输出</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { UploadInstance } from "element-plus";

const uploadRef = ref<UploadInstance>();
const file = ref();

const submitUpload = () => {
  uploadRef.value!.submit();
};

const handleChange = (file: File) => {
  console.log("file", file);
};

const getFile = () => {
  console.log("file", file.value);
};
</script>

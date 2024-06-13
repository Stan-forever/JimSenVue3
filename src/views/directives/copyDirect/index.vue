<!-- 大文件切片上传 -->
<template>
  <input type="file" @change="handleFileUpload" class="w-64" />
  <el-button type="primary" @click="handleUpload">上传</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

import axios from "axios";

const currentFile = ref();
const uploadChunkList = ref([]);

const handleFileUpload = (val: any) => {
  console.log("handleFileUpload", val.target.files);
  currentFile.value = val.target.files[0];
};

const handleUpload = () => {
  if (!currentFile.value) return;
  console.log("currentFile", currentFile.value);

  const chunkList = createChunk(currentFile.value);
  console.log("chunkList", chunkList);
  uploadChunkList.value = chunkList.map(({ file }, index) => {
    return {
      file,
      size: file.size,
      percent: 0,
      chunkName: `${currentFile.value.name}-${index}`,
      fileName: currentFile.value.name,
      index
    };
  });
  console.log("uploadChunkList", uploadChunkList.value);
  const res = uploadChunks();
  console.log("res", res);
};

const createChunk = (file: any, size = 1 * 1024 * 1024) => {
  console.log("file", file);

  const chunkList: any = [];
  let cur = 0;
  while (cur < file.size) {
    chunkList.push({ file: file.slice(cur, cur + size) });
    cur += size;
  }
  return chunkList;
};

const uploadChunks = () => {
  const formateList = uploadChunkList.value.map(({ file, fileName, index, chunkName }) => {
    // 对象需要转成二进制数据流进行传输
    const formData = new FormData(); // 创建表单格式的数据流
    // 将切片转换成了表单的数据流
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("chunkName", chunkName);
    return { formData, index };
  });
  const requestList = formateList.map(({ formData, index }) => {
    return requestUpload({
      url: "http://localhost:3000/upload",
      data: formData,
      onUploadProgress: createProgress(uploadChunkList.value[index]) // 进度条函数拿出来写
    });
  });
  return formateList;
};

const createProgress = (item: any) => {
  return e => {
    // 为何函数需要return出来，因为axios的onUploadProgress就是个函数体
    // 并且这个函数体参数e就是进度
    (item.percent as number) = parseInt(String(e.loaded / e.total) * 100); // axios提供的
  };
};

const requestUpload = ({ url, method = "post", data, headers = {}, onUploadProgress = e => e }) => {
  return new Promise((resolve, reject) => {
    // axios支持在请求中传入一个回调onUploadProgress，其目的就是为了知道请求的进度
    axios[method](url, data, { headers, onUploadProgress })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
</script>

<style scoped></style>

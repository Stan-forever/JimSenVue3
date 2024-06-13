<template>
  <el-table :data="tableData">
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="地址" prop="addr"></el-table-column>
    <el-table-column label="操作">
      <template #default="{ row, $index }">
        <el-button type="text" @click="handleImgPreview(row)">预览</el-button>
        <el-button type="text" @click="handleEdit(row, $index)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-image-viewer v-if="isShowImgPreview" :url-list="[currentRowImgUrl]" @close="isShowImgPreview = false" />

  <Dialog @save="updateRowData" v-model:visible="visible" :rowData="rowData" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import Dialog from "./dialog.vue";

import preview from "./assets/preview.png";

const srcList = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
const tableData = ref([
  {
    name: "1",
    addr: "4",
    url: "http://192.168.243.20:31035/pe-task-bucket-2e037cfa06624ae18e4169192620031e/2024-05-17/43229ac4-1431-11ef-b4d7-00e04c680077.jpeg"
  },
  { name: "2", addr: "5", url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" },
  { name: "3", addr: "6", url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg" }
]);

const rowData = ref();
const visible = ref(false);
const isShowImgPreview = ref(false);

const currentIndex = ref(-1);

const handleEdit = (row: any, index: number) => {
  currentIndex.value = index;
  rowData.value = row;
  visible.value = true;
};

const updateRowData = (row: any) => {
  tableData.value.splice(currentIndex.value, 1, row);
};

const currentRowImgUrl = ref("");

const handleImgPreview = (row: any) => {
  currentRowImgUrl.value = row.url;
  isShowImgPreview.value = true;
};

const parseIntFn = () => {
  const arr = [
    "33560432640",
    "33560178688",
    "33560305664",
    "33560551424",
    "33562677248",
    "33562931200",
    "33562390528",
    "33561976832",
    "33561755648",
    "33561214976"
  ];
  let numArr = arr.map(Number);

  console.log("numArr", numArr);
};

onMounted(() => {
  parseIntFn();
});
</script>

<style scoped></style>

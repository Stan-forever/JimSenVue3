<template>
  <el-table :data="tableData">
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="地址" prop="addr"></el-table-column>
    <el-table-column label="操作">
      <template #default="{ row, $index }">
        <el-button type="text" @click="handleEdit(row, $index)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Dialog @save="updateRowData" v-model:visible="visible" :rowData="rowData" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import Dialog from "./dialog.vue";

const tableData = ref([
  { name: "1", addr: "4" },
  { name: "2", addr: "5" },
  { name: "3", addr: "6" }
]);

const rowData = ref();
const visible = ref(false);

const currentIndex = ref(-1);

const handleEdit = (row: any, index: number) => {
  currentIndex.value = index;
  rowData.value = row;
  visible.value = true;
};

const updateRowData = (row: any) => {
  //   tableData.value.map((item, index) => {
  //     if (currentIndex.value === index) {
  //       item = row;
  //     }
  //   });
  tableData.value.splice(currentIndex.value, 1, row);
  //   tableData.value.slice;
};
</script>

<style scoped></style>

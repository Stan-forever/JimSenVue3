<template>
  <el-button @click="handleRowEdit('新增')">Add</el-button>
  <el-table :data="tableData">
    <el-table-column label="名字" prop="name" />
    <el-table-column label="年龄" prop="age" />
    <el-table-column label="地址" prop="addr">
      <template #default="{ row }">
        <div>{{ addrList[row.addr] }}</div>
      </template>
    </el-table-column>
    <el-table-column label="电话" prop="tel" />
    <el-table-column label="操作" fixed="right">
      <template #default="{ row }">
        <el-link :underline="false" type="primary" @click="handleRowEdit('编辑', row)"> 编辑 </el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false" type="danger" @click="handleRowEdit(row)"> 删除 </el-link>
      </template>
    </el-table-column>
  </el-table>
  <EditDialog ref="editDialogRef" @save="handleSave" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import EditDialog from "./editDialog.vue";

import { addrList } from "../mock/index";

export interface RowDataType {
  name: string;
  age?: number;
  addr: string;
  tel?: number;
  id: number | string;
}

const tableData = ref<RowDataType[]>([
  { name: "mike", age: 18, addr: "China", tel: 123, id: 1 },
  { name: "jane", age: 32, addr: "Janpan", tel: 456, id: 2 },
  { name: "kangkang", age: 12, addr: "England", tel: 789, id: 3 },
  { name: "jim", age: 25, addr: "American", tel: 321, id: 4 },
  { name: "omit", age: 32, addr: "Korea", tel: 654, id: 5 }
]);

const editDialogRef = ref<InstanceType<typeof EditDialog> | null>(null);

const handleRowEdit = (title, row: RowDataType = { name: "", addr: "", id: "" }) => {
  editDialogRef.value?.acceptParams(true, title, { ...row });
};

// const handleAdd = () => {
//   editDialogRef.value?.acceptParams(true, undefined);
// };

const handleSave = (data: RowDataType) => {
  tableData.value.forEach((item: RowDataType) => {
    if (item.id === data.id) item = data;
  });
};
</script>

<style scoped></style>

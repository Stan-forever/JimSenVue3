<template>
  <el-dialog :model-value="visible" title="编辑" width="30%" @close="handleClose" destroy-on-close>
    <!-- <el-table :data="tableData">
      <el-table-column label="姓名" prop="name">
        <template #default="{ row }">
          <el-input v-model="row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="地址" prop="addr">
        <template #default="{ row }">
          <el-input v-model="row.addr"></el-input>
        </template>
      </el-table-column>
    </el-table> -->
    <el-form :model="tableData">
      <el-form-item label="姓名">
        <el-input v-model="tableData.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="tableData.addr"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleSave">保存</el-button>
      <el-button @click="handleClose">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  rowData: any;
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "save", value: any): void;
  (e: "update:visible", value: boolean): void;
}>();

const tableData = ref({
  name: "",
  addr: ""
});

const handleSave = () => {
  emit("save", tableData.value);
  handleClose();
};

const handleClose = () => {
  emit("update:visible", false);
};

watch(
  () => props.visible,
  val => {
    if (val) {
      tableData.value = JSON.parse(JSON.stringify(props.rowData));
    }
  }
);
</script>

<style scoped></style>

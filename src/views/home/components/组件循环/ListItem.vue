<template>
  <div>
    <li>
      <span>{{ name }}</span>
      <el-button type="danger" @click="handleDelete" size="small">delete</el-button>
    </li>
  </div>
</template>

<script setup lang="ts">
interface ListDataType {
  id: number;
  name: string;
}

type ObjType = {
  [key: string]: string | number;
};

const props = defineProps<{
  //   listData: ListDataType[];
  name: string;
}>();
const emit = defineEmits<{
  (e: "itemDelete"): void;
}>();

const handleDelete = () => {
  emit("itemDelete");
};
</script>

<style scoped></style>

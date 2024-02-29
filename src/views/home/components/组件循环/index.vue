<template>
  <div>
    <div>
      <el-input v-model="textVal" class="w-20"></el-input>
      <el-button @click="handleAdd">添加</el-button>
    </div>
    <ul>
      <ListItem @item-delete="listData.splice(index, 1)" :name="item.name" v-for="(item, index) in listData" :key="item.id" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ListItem from "./ListItem.vue";

const textVal = ref("");
const listData = ref([
  { id: 0, name: "mike" },
  { id: 1, name: "jane" },
  { id: 2, name: "mary" }
]);

let nextId = 3;
const handleAdd = () => {
  let obj = {
    id: nextId++,
    name: textVal.value
  };
  listData.value.push(obj);
};
</script>

<style scoped></style>

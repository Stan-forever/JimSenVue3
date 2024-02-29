<template>
  <div>
    <ul v-for="(value, key, index) in myObject" :key="value">
      <li>
        <span class="mr-2">value:{{ value }}</span>
        <span class="mr-2">key:{{ key }}</span>
        <span>index:{{ index }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const myObject = reactive({
  name: "mike",
  age: 20,
  addr: "China"
});
</script>

<style scoped></style>

<template>
  <el-popover
    ref="popover"
    title="Title"
    :width="200"
    content="this is content, this is content, this is content"
    :visible="visible"
  >
    <template #reference>
      <!-- <el-button class="m-2">contextmenu to activate</el-button> -->
      <slot></slot>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>();
</script>

<style scoped></style>

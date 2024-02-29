<template>
  <div>
    <el-dialog v-model="visible" title="defineModelDialog" @close="visible = false">
      <template #footer>
        <el-button @click="visible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
const visible = defineModel<boolean>("visible");
</script>

<style scoped></style>

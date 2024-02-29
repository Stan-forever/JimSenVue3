<template>
  <div>
    <el-dialog :model-value="visible" @close="handleClose">
      <template #footer>
        <el-button @click="handleClose">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

const handleClose = () => {
  emit("update:visible", false);
};

watch(
  () => props.visible,
  () => {
    console.log(111);
  }
);
</script>

<style scoped></style>

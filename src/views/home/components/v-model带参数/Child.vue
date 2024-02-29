<template>
  <div>
    <!-- <input :value="text" @input="(e: any) => emit('update:text', e.target.value)"></input> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (e: "update: text", text: string): void;
}>();

// const computedText = ref(props.text);
</script>

<style scoped></style>

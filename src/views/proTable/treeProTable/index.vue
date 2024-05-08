<template>
  <div class="w-full h-full">
    <h2>x: {{ x }}</h2>
    <h2>y: {{ y }}</h2>
  </div>
</template>

<script setup lang="ts">
import usePosition from "@/hooks/usePosition";

const { x, y } = usePosition();
</script>

<style scoped></style>

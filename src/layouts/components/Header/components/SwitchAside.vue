<template>
  <div class="flex items-center justify-between">
    <div class="ml-2 mr-2 text-sm">菜单反转色</div>
    <el-switch v-model="asideInverted" @change="setAsideTheme" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useGlobalStore } from "@/stores/modules/global";
import { useTheme } from "@/hooks/useTheme";

const { setAsideTheme } = useTheme();

const globalStore = useGlobalStore();
const { asideInverted } = storeToRefs(globalStore);
</script>

<style scoped></style>

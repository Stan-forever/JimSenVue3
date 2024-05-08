<template>
  <el-drawer v-model="state.drawerParams.visible" :title="state.drawerParams.title" size="20%">
    <SwitchDark />
    <SwitchAside />
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SwitchDark from "../Header/components/SwitchDark.vue";
import SwitchAside from "../Header/components/SwitchAside.vue";

const state = ref({
  drawerParams: {
    visible: false,
    title: ""
  }
});

interface ParamsType {
  title: string;
  visible: boolean;
}
const acceptParams = (params: ParamsType) => {
  state.value.drawerParams = params;
};

defineExpose({
  acceptParams
});
</script>

<style scoped lang="scss">
.el-icon {
  margin-left: 3px;
  font-size: 15px;
  color: var(--el-text-color-regular);
  cursor: pointer;
}
</style>

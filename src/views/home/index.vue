<template>
  <div>Home</div>
  <el-button @click="router.push('/dataScreen')">Push</el-button>
  <el-button type="primary" @click="resetToken">ResetToken</el-button>
  <!-- <div class="rectangle"></div> -->
  <!-- <Child :[attributeName]="1" /> -->
  <div>当前attributeName: {{ attributeName }}</div>
  <el-button @click="handleSwitch">Switch</el-button>
  <el-divider></el-divider>
  <IndexCom />
  <el-divider></el-divider>
  <el-button v-debounce="debounceClick" type="primary">debounceClick</el-button>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from "vue";
import { useUserStore } from "@/stores/modules/user";

import { useRouter } from "vue-router";

import PrototyeEnum from "./prototypeEnum";

import Child from "./components/Child.vue";
import IndexCom from "./components/index.vue";

const userStore = useUserStore();

const router = useRouter();

const resetToken = () => {
  userStore.setToken("");
};

const typeFn = (type: any) => {
  return Object.prototype.toString.call(type);
};

const isId = ref(true);
const handleSwitch = () => {
  isId.value = !isId.value;
};

const attributeName = computed(() => {
  return isId.value ? "id" : "name";
});

const debounceClick = () => {
  console.log("debounce");
};

onMounted(() => {
  typeFn([]);
  nextTick(() => {
    setTimeout(() => {
      console.log("000");
    }, 0);
  });
});
</script>

<style scoped lang="scss">
.rectangle {
  width: 100px;
  height: 100px;
  border: 50px solid transparent;

  border-top: 50px solid yellowgreen;
  /* border-bottom: 50px solid deeppink;
  border-left: 50px solid bisque;
  border-right: 50px solid chocolate; */
}
</style>

<template>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ double }}</div>
  <div>user: {{ user }}</div>
  <div>getUserByName: {{ getUserByName("sam") }}</div>
  <el-button type="primary" @click="handleIncrease"> increment </el-button>
  <el-button type="primary" @click="handlePatch">patch</el-button>
  <el-button @click="handleReset">reset</el-button>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import { storeToRefs } from "pinia";

import { useLearnStore } from "@/stores/modules/learn";

const counter = useLearnStore();

const { count, double, user, getUserByName } = storeToRefs(counter);

const handleIncrease = () => {
  counter.increment();
};

const handlePatch = () => {
  counter.$patch({
    count: counter.count + 2,
    user: {
      name: "ana",
      age: 11
    }
  });
};

const handleReset = () => {
  counter.$reset();
};

counter.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});

counter.$onAction(
  ({
    name, // action 名称
    store, // store 实例，类似 `someStore`
    args, // 传递给 action 的参数数组
    after, // 在 action 返回或解决后的钩子
    onError // action 抛出或拒绝的钩子
  }) => {
    // 为这个特定的 action 调用提供一个共享变量
    const startTime = Date.now();
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(", ")}].`);

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after(result => {
      console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`);
    });

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError(error => {
      console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`);
    });
  }
);
</script>

<style scoped></style>

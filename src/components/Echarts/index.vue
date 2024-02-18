<template>
  <div id="echarts" ref="chartRef" :style="echartsStyle" />
</template>

<script setup lang="ts">
import { computed, onMounted, nextTick, ref } from "vue";

import { EChartsType, ECElementEvent } from "echarts/core";
import echarts, { ECOption } from "./config/index";

import { debounceFn } from "@/utils/debounce";
import { useDebounceFn } from "@vueuse/core";

interface PropsType {
  option: ECOption;
  height?: string | number;
  width?: string | number;
}
const props = withDefaults(defineProps<PropsType>(), {});

const echartsStyle = computed(() => {
  return props.height || props.width
    ? { height: props.height + "px", width: props.width + "px" }
    : { height: "100%", width: "100%" };
});

const chartRef = ref<HTMLDivElement | HTMLCanvasElement>();
const chartInstance = ref<EChartsType>();

const init = () => {
  if (!chartRef.value) return;
  let myChart = echarts.init(chartRef.value);
  myChart.setOption(props.option);
  const echartsResize = useDebounceFn(() => {
    myChart && myChart.resize();
  }, 100);
  window.addEventListener("resize", echartsResize);
};

onMounted(() => {
  nextTick(() => init());
});
</script>

<style scoped></style>

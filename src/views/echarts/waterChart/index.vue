<template>
  <div class="w-full h-full">
    <template v-for="item in commands" :key="item.key">
      <el-button @click="transform(item.key)">{{ item.label }}</el-button>
    </template>
    <div id="container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, computed } from "vue";

import { Graph } from "@antv/x6";

const commands = [
  {
    key: "zoomIn",
    label: "ZoomIn(0.2)"
  },
  {
    key: "zoomOut",
    label: "ZoomOut(-0.2)"
  },
  {
    key: "zoomTo",
    label: "ZoomTo(1)"
  },
  {
    key: "zoomToFit",
    label: "ZoomToFit"
  },
  {
    key: "centerContent",
    label: "CenterContent"
  }
];

const graph = computed(() => {
  return new Graph({
    container: document.getElementById("container") as HTMLElement,
    width: 1200,
    height: 500,
    // autoResize: true,
    // 设置画布背景颜色
    background: {
      color: "#F2F7FA"
    },
    grid: {
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee", // 主网格线颜色
          thickness: 1 // 主网格线宽度
        },
        {
          color: "#ddd", // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4 // 主次网格线间隔
        }
      ]
    },
    panning: true, //鼠标拖拽画布移动
    mousewheel: true //鼠标滚轮缩放
  });
});

const commonAttrs = {
  body: {
    fill: "#fff",
    stroke: "#8f8f8f",
    strokeWidth: 1
  },
  label: {
    refX: 0.5,
    refY: "100%",
    refY2: 4,
    textAnchor: "middle",
    textVerticalAnchor: "top"
  }
};

const init = () => {
  const data = {
    nodes: [
      {
        id: "node1",
        shape: "rect",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: "hello",
        attrs: {
          // body 是选择器名称，选中的是 rect 元素
          body: {
            stroke: "#8f8f8f",
            strokeWidth: 1,
            fill: "#fff",
            rx: 6,
            ry: 6
          }
        }
      },
      {
        id: "node2",
        shape: "rect",
        x: 160,
        y: 180,
        width: 100,
        height: 40,
        label: "world",
        attrs: {
          body: {
            stroke: "#8f8f8f",
            strokeWidth: 1,
            fill: "#fff",
            rx: 6,
            ry: 6
          }
        }
      }
    ],
    edges: [
      {
        shape: "edge",
        source: "node1",
        target: "node2",
        label: "x6",
        attrs: {
          // line 是选择器名称，选中的边的 path 元素
          line: {
            stroke: "#8f8f8f",
            strokeWidth: 1
          }
        }
      }
    ]
  };

  graph.value.fromJSON(data); // 渲染元素
  graph.value.centerContent(); // 居中显示
};

const transform = (command: string) => {
  switch (command) {
    case "translate":
      graph.value.translate(20, 20);
      break;
    case "zoomIn":
      graph.value.zoom(0.2);
      break;
    case "zoomOut":
      graph.value.zoom(-0.2);
      break;
    case "zoomTo":
      graph.value.zoomTo(1);
      break;
    case "zoomToFit":
      graph.value.zoomToFit();
      break;
    case "centerContent":
      graph.value.centerContent();
      break;
    default:
      break;
  }
};

onMounted(() => {
  nextTick(() => {
    init();
  });
});
</script>

<style scoped></style>

<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" @node-contextmenu="handleRightClick">
    <template #default="{ node, data }">
      <ContextMenu :visible="currentLabel === data.label">
        <div @click="clickFn(node, data)" v-click-outside="() => (currentLabel = '')">{{ data.label }}</div>
      </ContextMenu>
    </template>
  </el-tree>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import ContextMenu, { ClickOutside as vClickOutside } from "@/components/ContextMenu/index";

interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
};

const clickFn = (node, data) => {
  console.log("node", node);
  console.log("data", data);
};

const currentLabel = ref("");

const handleRightClick = (event, data, node, target) => {
  console.log("event", event);
  console.log("data", data);
  console.log("node", node);
  console.log("target", target);
  currentLabel.value = data.label;
};

const data: Tree[] = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1"
          }
        ]
      }
    ]
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1"
          }
        ]
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1"
          }
        ]
      }
    ]
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1"
          }
        ]
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1"
          }
        ]
      }
    ]
  }
];

const defaultProps = {
  children: "children",
  label: "label"
};
</script>

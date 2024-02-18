<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span class="sle">{{ item.meta.title }}</span>
      </template>
      <sub-menu :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" @click="handleMenuClick(item)">
      <el-icon v-if="item.meta.icon">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        <span class="sle">{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useRouter } from "vue-router";

import { useTabsStore } from "@/stores/modules/tabs";

import SubMenu from "@/layouts/components/Menu/SubMemu.vue";

const props = defineProps<{
  menuList: Menu.MenuOptions[];
}>();

const router = useRouter();

const tabsStore = useTabsStore();

const handleMenuClick = (item: Menu.MenuOptions) => {
  console.log("item", item);

  const { path } = item;
  let obj = { name: item.meta.title, path, closeable: path != "/home/index" };
  tabsStore.addTabs(obj);

  if (item.meta.isLink) return window.open(item.path, "_blank");
  router.push(item.path);
};

onMounted(() => {});
</script>

<style scoped></style>

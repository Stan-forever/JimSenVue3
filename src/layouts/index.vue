<template>
  <div class="w-full h-full">
    <el-container class="w-full h-full">
      <el-aside style="width: 240px">
        <el-scrollbar>
          <el-menu :router="false" :default-active="activeMenu" :collapse-transition="false" :unique-opened="true">
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="height: 80px; display: flex; flex-direction: column">
          <div class="w-full h-8">
            <Header />
          </div>
          <div class="w-full h-12 flex">
            <Tabs class="flex-1" />
            <MoreButtons class="w-10" />
          </div>
        </el-header>
        <el-main class="main">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <!-- <keep-alive> -->
              <div :class="!isDiyStyle ? 'main-content' : 'h-full'">
                <component :is="Component" :key="route.fullPath" v-if="isRouterShow" />
              </div>
              <!-- </keep-alive> -->
            </transition>
          </router-view>
        </el-main>
        <el-footer style="height: 40px"></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { useRoute } from "vue-router";
import SubMenu from "./components/Menu/SubMemu.vue";
import Tabs from "./components/Tabs/index.vue";
import MoreButtons from "./components/MoreButtons/index.vue";
import Header from "./components/Header/index.vue";

import { useAuthStore } from "@/stores/modules/auth";
const authStore = useAuthStore();
const route = useRoute();

const isRouterShow = ref(true);
const refreshPage = (value: boolean) => (isRouterShow.value = value);
provide("refreshPage", refreshPage);

const isDiyStyle = computed(() => {
  return route.fullPath === "/auth/menu";
});
const menuList = computed(() => {
  return authStore.menu;
});

const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
</script>

<style lang="scss" scoped>
.main {
  height: auto;
  background: #eff0f2;
  padding: 12px;
  .main-content {
    background: #fff;
    border-radius: 8px;
    min-height: 100%;
    width: 100%;
    padding: 24px;
  }
}
:deep(.el-header) {
  background-color: var(--el-header-bg-color);
}
.el-container {
  :deep(.el-aside) {
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
    .el-scrollbar {
      height: 100%;
      .el-menu {
        width: 100%;
        overflow-x: hidden;
        border-right: none;
      }
    }
  }
}
</style>

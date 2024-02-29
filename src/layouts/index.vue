<template>
  <div class="w-full h-full">
    <el-container class="w-full h-full">
      <el-aside style="width: 240px">
        <el-scrollbar class="h-full">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            :router="false"
            :default-active="activeMenu"
            :collapse-transition="false"
            :unique-opened="true"
          >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="height: 80px; display: flex; flex-direction: column">
          <div class="w-full h-8">
            <Header />
          </div>
          <div class="w-full h-12">
            <Tabs />
          </div>
        </el-header>
        <el-main class="main">
          <router-view v-slot="{ Component, route }">
            <transition mode="out-in">
              <!-- <keep-alive> -->
              <div :class="!isDiyStyle ? 'main-content' : 'h-full'">
                <component :is="Component" :key="route.fullPath"></component>
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
import { computed } from "vue";
import { useRoute } from "vue-router";
import SubMenu from "./components/Menu/SubMemu.vue";
import Tabs from "./components/Tabs/index.vue";
import Header from "./components/Header/index.vue";

import { useAuthStore } from "@/stores/modules/auth";
const authStore = useAuthStore();
const route = useRoute();

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
    height: 100%;
    width: 100%;
    padding: 24px;
  }
}
/* :deep(.el-menu-vertical-trader) {
  height: 100vh;
} */
/* :deep(.el-scrollbar__view) {
  height: 100%;
}
:deep(.el-menu) {
  height: 100%;
} */
</style>

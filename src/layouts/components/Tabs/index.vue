<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsValue" type="card" @tab-change="tabChange" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.name" :name="item.path" :closable="item.closeable" />
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { TabsPaneContext, TabPaneName } from "element-plus";
import { useTabsStore } from "@/stores/modules/tabs";
import router from "@/router";

const route = useRoute();
const tabsStore = useTabsStore();

const tabsList = computed(() => {
  return tabsStore.tabsList;
});
const tabsValue = ref(route.fullPath);

const tabChange = (path: TabPaneName) => {
  router.push(path as string);
};

const tabRemove = (path: TabPaneName) => {
  tabsStore.deleteTabs(path as string);
};

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return;
    tabsValue.value = route.fullPath;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.tabs-box {
  background-color: var(--el-bg-color);
  .tabs-menu {
    position: relative;
    width: 100%;
    :deep(.el-tabs) {
      .el-tabs__header {
        box-sizing: border-box;
        height: 40px;
        padding: 0 10px;
        margin: 0;
        .el-tabs__nav-wrap {
          position: absolute;
          width: calc(100% - 70px);
          .el-tabs__nav {
            display: flex;
            border: none;
            .el-tabs__item {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #afafaf;
              border: none;
              .tabs-icon {
                margin: 1.5px 4px 0 0;
                font-size: 15px;
              }
              .is-icon-close {
                margin-top: 1px;
              }
              &.is-active {
                color: var(--el-color-primary);
                &::before {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 0;
                  content: "";
                  border-bottom: 2px solid var(--el-color-primary) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

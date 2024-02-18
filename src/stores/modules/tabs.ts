import { defineStore } from "pinia";
import router from "@/router";

interface TabItemType {
  closeable: boolean;
  name: string;
  path: string;
}

interface TabsType {
  tabsList: TabItemType[];
}

export const useTabsStore = defineStore({
  id: "tabsStore",
  state: (): TabsType => ({
    tabsList: [{ path: "/home/index", name: "首页", closeable: false }]
  }),
  actions: {
    addTabs(item: TabItemType) {
      if (this.tabsList.findIndex((tabsItem: TabItemType) => tabsItem.path === item.path) === -1) this.tabsList.push(item);
    },
    deleteTabs(path: string) {
      let findIndex = this.tabsList.findIndex((tabsItem: TabItemType) => tabsItem.path === path);
      const previewItem = this.tabsList[findIndex - 1];
      router.push(previewItem.path);
      this.tabsList.splice(findIndex, 1);
    }
  },
  persist: true
});

import { defineStore } from "pinia";
import { getMenuList } from "@/services/modules/auth";

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}

interface AuthStoreType {
  menu: Menu.MenuOptions[];
}

export const useAuthStore = defineStore({
  id: "authStore",
  state: (): AuthStoreType => ({
    menu: []
  }),
  getters: {
    flatMenuListGet: state => getFlatMenuList(state.menu)
  },
  actions: {
    async getMenuList() {
      const res = await getMenuList();
      this.menu = res.data as any;
    }
  }
  //   persist: true
});

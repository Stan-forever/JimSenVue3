import { defineStore } from "pinia";
import { DEFAULT_PRIMARY } from "@/config";

interface GlobalType {
  isDark: boolean;
  primary: string;
}

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: (): GlobalType => ({
    isDark: false,
    primary: DEFAULT_PRIMARY
  }),
  actions: {
    switchDark() {
      this.isDark = !this.isDark;
    },
    setPrimary(val: string) {
      this.primary = val;
    }
  },
  getters: {},
  persist: true
});

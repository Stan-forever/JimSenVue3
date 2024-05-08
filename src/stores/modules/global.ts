import { defineStore } from "pinia";
import { DEFAULT_PRIMARY } from "@/config";

interface GlobalType {
  isDark: boolean;
  primary: string;
  asideInverted: boolean;
}

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: (): GlobalType => ({
    isDark: false,
    primary: DEFAULT_PRIMARY,
    asideInverted: false
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

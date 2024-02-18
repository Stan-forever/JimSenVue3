import { defineStore } from "pinia";

interface UserStoreType {
  token: string;
}

export const useUserStore = defineStore({
  id: "userStore",
  state: (): UserStoreType => ({
    token: ""
  }),
  actions: {
    setToken(value: string) {
      this.token = value;
    }
  },
  persist: true
});

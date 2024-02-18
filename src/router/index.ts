import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { initDynamicRouter } from "./modules/dynamicRouter";
import { staticRouter, errorRouter } from "./modules/staticRouter";

import { useUserStore } from "@/stores/modules/user";
import { useAuthStore } from "@/stores/modules/auth";

import NProgress from "@/config/ngprogress";

const router = createRouter({
  //   history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStore();
  const authStore = useAuthStore();
  if (to.path.toLocaleLowerCase() === "/login") {
    if (userStore.token) return next(from.fullPath);
    return next();
  }

  if (!userStore.token) {
    authStore.menu = [];
    return next({ path: "/login", replace: true });
  }
  if (authStore.menu.length === 0) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

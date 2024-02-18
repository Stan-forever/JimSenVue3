import { RouteRecordRaw } from "vue-router";

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home/index"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layouts/index.vue"),
    // component: () => import("@/layouts/indexAsync.vue"),
    redirect: "/home/index",
    children: []
  }
];

export const errorRouter = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errorPage/404.vue"),
    meta: {
      title: "404页面"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/errorPage/404.vue")
  }
];

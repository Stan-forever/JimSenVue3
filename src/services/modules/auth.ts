import http from "@/services/index";

import authMenuList from "@/assets/json/authMenuList.json";

interface LoginParamsType {
  username: string;
  password: string;
}

interface LoginResType {
  token: string;
}

export const loginApi = (params: LoginParamsType) => {
  return http.post<LoginResType>("/api/login", params);
};

export const getMenuList = () => {
  //   return http.get<Menu.MenuOptions[]>("/api/menuList");
  //   return http.get<Menu.MenuOptions[]>("/api/pcldata-monitor-auth/auth/user/menu/searchMenutree");
  return authMenuList;
};

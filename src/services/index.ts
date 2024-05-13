import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

import type { ResultData } from "./interface";

const config = {
  //   baseURL: "http://192.168.100.10:30052/",
  // 默认地址请求地址，可在 .env.** 文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 30000
};

class RequesHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return config;
    });
    this.service.interceptors.response.use((response: AxiosResponse) => {
      const { data, config } = response;

      return data;
    });
  }
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequesHttp(config);

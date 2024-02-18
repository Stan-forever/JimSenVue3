import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

import type { ResultData } from "./interface";

const config = {
  baseURL: "https://www.fastmock.site/mock/0f7fc76e420581db7d2cf9316d59b18b/dataScreen/",
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

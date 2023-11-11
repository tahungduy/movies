import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const buildClient = (
  config?: AxiosRequestConfig,
  enableInterceptor = true
): AxiosInstance => {
  const instance = axios.create(config);
  if (enableInterceptor) {
    // instance.interceptors.request.use(requestInterceptor);
    // instance.interceptors.response.use(responseInterceptor, (error) => {
    //   handleResponseError(error?.response?.status);
    //   return Promise.reject(error);
    // });
  }

  return instance;
};

export default buildClient;
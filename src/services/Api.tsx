import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const buildClient = (
  config?: AxiosRequestConfig,
): AxiosInstance => {
  const instance = axios.create(config);
  instance.interceptors.request.use(
    (config) => {
      config.url += (config?.url?.includes('?') ? '&' : '?') + `api_key=${process.env.REACT_APP_API_KEY}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export default buildClient;
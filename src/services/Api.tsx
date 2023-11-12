import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const buildClient = (
  config?: AxiosRequestConfig,
): AxiosInstance => {
  const instance = axios.create(config);
  return instance;
};

export default buildClient;
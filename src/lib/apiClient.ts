// src/lib/axios/createApiServer.ts
import axios from "axios";

const createApiClient = () => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 5000,
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        window.location.href = "/dang-nhap";
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default createApiClient;

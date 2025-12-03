// import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
// import { getAccessToken } from "../auth/authService"; // must return Promise<string | null>

// const api: AxiosInstance = axios.create({
//   baseURL: "https://api.restful-api.dev",
// });

// // Add request interceptor
// api.interceptors.request.use(
//   async (config: AxiosRequestConfig) => {
//     const token: string | null = await getAccessToken();

//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else if (token) {
//       // If headers object doesn't exist, create it
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default api;


// src/api/api.ts
import axios from "axios";
import { getUser } from "../services/authService";

const API_BASE = import.meta.env.VITE_API_BASE || "https://audiorealities.com/api";

const api = axios.create({
  baseURL: API_BASE,
});

// request interceptor to attach bearer token
api.interceptors.request.use(async (config) => {
  try {
    const user = await getUser();
    const token = user?.access_token;
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } catch (e) {
    // no-op
  }
  return config;
});

export default api;

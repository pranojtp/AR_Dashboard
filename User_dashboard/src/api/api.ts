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


import axios from "axios";

const api = axios.create({
  baseURL: "https://audiorealities.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // 
});

// Optional: Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
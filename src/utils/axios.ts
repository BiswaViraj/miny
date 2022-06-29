import axios from "axios";
import { BASE_API_URL } from "./constant";

export const privateAxiosInstance = axios.create({ baseURL: BASE_API_URL });

privateAxiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

privateAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export const publicAxiosInstance = axios.create({ baseURL: BASE_API_URL });

publicAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

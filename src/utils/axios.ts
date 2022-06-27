import axios from "axios";
import { BASE_API_URL } from "./constant";

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

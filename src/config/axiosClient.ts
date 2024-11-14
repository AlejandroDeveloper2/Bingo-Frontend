import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTION_API_URL,
});

export default axiosClient;

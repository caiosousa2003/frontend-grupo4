import axios from "axios";
import useAuthStore from "../../Stores/auth";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({ baseURL:BASE_URL, });

api.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
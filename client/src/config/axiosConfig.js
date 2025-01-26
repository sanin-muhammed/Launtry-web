import axios from "axios";
const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json", // Default content type
    "Authorization": `Bearer ${token}`,
  },
});

export default axiosInstance;

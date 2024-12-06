import axios from "axios";

// Set up Axios with default headers
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});

export default axiosInstance;

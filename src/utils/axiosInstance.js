import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  // timeout: 10000, // Optional: set a timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

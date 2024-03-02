import axios from "axios";
import { getCookie } from "../utils/cookie.util";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${getCookie("token").value}`,
  },
});

export default axiosInstance;

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatting-application-0wcp.onrender.com/api",
  withCredentials: true,
}); 
import axios from "axios";

console.log("AI BASE URL =", process.env.REACT_APP_AI_API_BASE_URL);

const aiAxios = axios.create({
  baseURL: process.env.REACT_APP_AI_API_BASE_URL,
  withCredentials: true, // Sends HttpOnly access_token cookie if available
});

// 🚀 FIX: Attach LocalStorage Bearer Token for Cross-Domain FastAPI Authorization
aiAxios.interceptors.request.use(
  (config) => {
    console.log("REQUEST URL =>", `${config.baseURL}${config.url}`);

    const token = localStorage.getItem("sls_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default aiAxios;
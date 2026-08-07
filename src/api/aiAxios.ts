import axios from "axios";

console.log("AI BASE URL =", process.env.REACT_APP_AI_API_BASE_URL);

const aiAxios = axios.create({
  baseURL: process.env.REACT_APP_AI_API_BASE_URL,
  withCredentials: true, // Sends HttpOnly access_token cookie automatically
});

aiAxios.interceptors.request.use(
  (config) => {
    console.log("REQUEST URL =>", `${config.baseURL}${config.url}`);
    // No need to manually attach Bearer token from localStorage anymore
    return config;
  },
  (error) => Promise.reject(error)
);

export default aiAxios;
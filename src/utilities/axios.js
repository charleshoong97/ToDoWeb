import axios from "axios";
import store from "./redux/store";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

Axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers.Authorization =
    "Bearer " + store.getState().authentication.token;
  return config;
});

Axios.interceptors.response.use(
  (response) => {
    return { error: false, ...response };
  },
  (error) => {
    return {
      error: true,
      message: error.response.data.message,
    };
  }
);

import { apiAuthValidate, apiLogin } from "../constant/api";
import { Axios } from "../utilities/axios";

export const login = async ({ email, password }) => {
  return await Axios.post(apiLogin, {
    email,
    password,
  });
};

export const validateToken = async () => {
  return await Axios.get(apiAuthValidate);
};

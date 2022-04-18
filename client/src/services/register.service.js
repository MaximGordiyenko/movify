import axios from "axios";
import { localhost, port } from "../config/keys";

export const register = async (data) => {
  try {
    const response = await axios.post(`${localhost}:${port}/api/users/register`, data);
    const json = JSON.stringify(response);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
  
};

export const registerService = {
  register,
};
import axios from "axios";
export const loginService = async (email, password) => {

  return await axios.post("http://localhost:8080/api/v1/signin", { email, password });
};

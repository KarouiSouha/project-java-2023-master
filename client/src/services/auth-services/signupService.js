import axios from "axios";

export const signupService = async (email, password, firstName, lastName,confirm) =>
  await axios.post("http://localhost:8080/api/v1/signup", {
    email,
    password,
    firstName,
    lastName,
    confirm,
  });

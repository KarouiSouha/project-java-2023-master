import axios from "axios";

export const getCartService = async (encodedToken,userId) =>
  await axios.get("http://localhost:8080/api/v1/cart/"+userId, {
    headers: { authorization: encodedToken },
  });

import axios from "axios";

export const clearCartService = async (token,userId) => {
  return await axios.delete(
    "http://localhost:8080/api/v1/cart/clearCart/"+userId,
    {},
    { headers: { authorization: token } }
  );
};

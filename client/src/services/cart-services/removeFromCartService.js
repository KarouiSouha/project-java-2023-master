import axios from "axios";

export const removeFromCartService = async (productId, encodedToken,userId) => {
  return await axios.delete(`http://localhost:8080/api/v1/cart/${productId}/${userId}`, {
    headers: { authorization: encodedToken },
  });
};

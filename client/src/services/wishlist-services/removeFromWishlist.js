import axios from "axios";

export const removeFromWishlistService = async (productId, encodedToken,userId) => {
  return await axios.delete(`http://localhost:8080/api/v1/wishlist/${productId}/${userId}`, {
    headers: { authorization: encodedToken },
  });
};

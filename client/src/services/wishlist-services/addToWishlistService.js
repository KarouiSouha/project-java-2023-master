import axios from "axios";

export const addToWishlistService = async (product, encodedToken,userId) => {
  return await axios.post(
    `http://localhost:8080/api/v1/wishlist/${userId}/${product.id}`,
    { product: { ...product } },
    {
      headers: { authorization: encodedToken },
    }
  );
};

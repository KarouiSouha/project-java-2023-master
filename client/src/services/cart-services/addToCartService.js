import axios from "axios";

export const addToCartService = async (product, encodedToken,id) => {
  return await axios.post(
    `http://localhost:8080/api/v1/cart/${id}/${product.id}`,
    { product: { ...product } },
    {
      headers: { authorization: encodedToken },
    }
  );
};

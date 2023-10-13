import axios from "axios";

export const changeQuantityCartService = async (
  productId,
  encodedToken,
  type,
  userId
) => {
  return await axios.put(
    `http://localhost:8080/api/v1/cart/${userId}/${productId}`,

    {
      action: {
        type,
      },
    },
    {
      headers: { authorization: encodedToken },
    }
  );
};

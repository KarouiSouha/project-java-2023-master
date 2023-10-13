import axios from "axios";

export const getWishlistService = async (encodedToken,userID) =>
  await axios.get(`http://localhost:8080/api/v1/wishlist/${userID}`, {
    headers: { authorization: encodedToken },
  });

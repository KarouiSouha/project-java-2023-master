import axios from "axios";

export const getOrderService = async (token,userId) => {
  return await axios.get("http://localhost:8080/api/v1/orders/"+userId, {
    headers: { authorization: token },
  });
};

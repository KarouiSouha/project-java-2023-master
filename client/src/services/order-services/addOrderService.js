import axios from "axios";

export const addOrderService = async (order, token,userId) => {
  return await axios.post(
    "http://localhost:8080/api/v1/orders/"+userId,
    order,
    { headers: { authorization: token } }
  );
};

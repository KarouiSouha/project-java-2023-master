import axios from "axios";

export const getAddressListService = async (token,userId) => {
  return await axios.get("http://localhost:8080/api/v1/address/"+userId, {
    headers: { authorization: token },
  });
};

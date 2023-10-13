import axios from "axios";

export const addAddressService = async (address, token,userId) => {
  return await axios.post(
    "http://localhost:8080/api/v1/address/"+userId,
     address ,
    { headers: { authorization: token } }
  );
};

import axios from "axios";

export const removeAddressService = async (address, token) => {
  return await axios.delete(`http://localhost:8080/api/v1/address/${address.id}`, {
    headers: { authorization: token },
  });
};

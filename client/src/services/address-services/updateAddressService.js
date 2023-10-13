import axios from "axios";

export const updateAddressService = async (address, token) => {
  return await axios.put(
    `http://localhost:8080/api/v1/adress/${address.id}`,
    { address },
    { headers: { authorization: token } }
  );
};

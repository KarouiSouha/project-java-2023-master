import axios from "axios";

export const getAllCategories = async () => await axios.get("http://localhost:8080/api/v1/categories");

export const getAllProducts = async () => await axios.get("http://localhost:8080/api/v1/products");

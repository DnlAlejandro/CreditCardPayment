import axios from "axios";

const limitProducts = 8;
const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    params: {limit: limitProducts}
});

export const getProducts = async () => {
    try {
        const response = await apiClient.get("/products/");
        return response.data; 
    } catch (error) {
        console.error("Error getting products", error);
        throw error; 
    }
};

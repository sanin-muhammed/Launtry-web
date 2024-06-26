import axios from "../config/axiosConfig";

export const all_banners = async () => {
    try {
        const response = await axios.get("/all_banners");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const allOffers = async () => {
    try {
        const response = await axios.get("/all_offers");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const allServices = async () => {
    try {
        const response = await axios.get("/all_services");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const allProducts = async () => {
    try {
        const response = await axios.get("/all_products");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const allPickups = async () => {
    try {
        const response = await axios.get("/all_pickups");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};
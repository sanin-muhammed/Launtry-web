import { enqueueSnackbar } from "notistack";
import axios from "../config/axiosConfig";
import { useSelector } from "react-redux";

export const allAddress = async () => {
    try {
        const response = await axios.get("/all_address");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const addAddress = async (formData) => {
    try {
        const response = await axios.post("/add_address", formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const editAddress = async (id, formData) => {
    try {
        const response = await axios.post(`/edit_address?id=${id}`, formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const deleteAddress = async (id) => {
    try {
        const response = await axios.delete(`/delete_address?id=${id}`);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const allOrders = async (id) => {
    try {
        const response = await axios.get(`/all_orders?id=${id}`);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const confirmOrder = async (data) => {
    try {
        const response = await axios.post("/add_order", data);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

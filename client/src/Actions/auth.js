import axios from "axios";
const URL = "http://localhost:2001/api";
export const registerUser = async (formData) => {
    const headers = {
        "Content-Type": "application/json", //  sending JSON data
    };
    try {
        const response = await axios.post(`${URL}/register`, formData, { headers });
        console.log("Registration successful:", response.data);
        return response.data;
    } catch (error) {
        console.log("registration error =", error.response.data);
        return error.response.data;
    }
};

export const loginUser = async (formData) => {
    const headers = {
        "Content-Type": "application/json", //  sending JSON data
    };
    try {
        const response = await axios.post(`${URL}/login`, formData, { headers });
        console.log("successful:", response.data);
        return response.data;
    } catch (error) {
        console.log("login error =", error.response.data);
        return error.response.data;
    }
};

export const verifyOtp = async (formData) => {
    const headers = {
        "Content-Type": "application/json", //  sending JSON data
    };
    try {
        const response = await axios.post(`${URL}/verify_otp`, formData, { headers });
        console.log("verify otp successful:", response.data);
        return response.data;
    } catch (error) {
        console.log("verify otp error =", error.response.data);
        return error.response.data;
    }
};

export const sendOTP = async (formData) => {
    const headers = {
        "Content-Type": "application/json", //  sending JSON data
    };
    try {
        const response = await axios.post(`${URL}/send_otp`, formData, { headers });
        console.log("OTP send successful:", response.data);
        return response.data;
    } catch (error) {
        console.log("OTP error =", error.response.data);
        return error.response.data;
    }
};
export const createPassword = async (formData) => {
    const headers = {
        "Content-Type": "application/json", //  sending JSON data
    };
    try {
        const response = await axios.patch(`${URL}/create_password`, formData, { headers });
        console.log("create password successful:", response.data);
        return response.data;
    } catch (error) {
        console.log("create password error =", error.response.data);
        return error.response.data;
    }
};

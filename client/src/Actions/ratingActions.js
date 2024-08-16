import axios from "../config/axiosConfig";

export const checkRatingExist = async (id) => {
    try {
        const response = await axios.get(`/rating_exist?id=${id}`);
        console.log("api success ", response.data);
        return response.data;
    } catch (error) {
        console.log("api failed ", error.response);
        return error.response.data;
    }
};

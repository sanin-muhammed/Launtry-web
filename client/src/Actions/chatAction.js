import axios from "../config/axiosConfig";

export const SendMessage = async (data) => {
  try {
    const response = await axios.post("/send_message",data);
    console.log(" successful:", response.data);
    return response.data;
  } catch (error) {
    console.log(" error =", error.response.data);
    return error.response.data;
  }
};
export const GetMessages = async (data) => {
  try {
    const response = await axios.get("/get_messages",data);
    console.log(" successful:", response.data);
    return response.data;
  } catch (error) {
    console.log(" error =", error.response.data);
    return error.response.data;
  }
};

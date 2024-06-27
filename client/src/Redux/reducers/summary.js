import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: "",
    pickupDate: {},
    delivery: {},
    totalAmount: 0,
};

const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {
        setAddress(state, action) {
            state.address = action.payload;
            console.log("address =", action.payload);
        },
        setPickupDate(state, action) {
            state.pickupDate = action.payload;
            console.log("pickupDate =", action.payload);
        },
        setDelivery(state, action) {
            state.delivery = action.payload;
            console.log("delivery =", action.payload);
        },
        setTotalAmount(state, action) {
            state.totalAmount = action.payload;
            console.log("totalAmount =", action.payload);
        },
    },
});

export const { setAddress, setDelivery, setPickupDate, setTotalAmount } = summarySlice.actions;
export default summarySlice.reducer;

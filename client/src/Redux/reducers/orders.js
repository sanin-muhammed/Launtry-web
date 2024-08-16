import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    order:{},
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrders(state, action) {
            state.orders = action.payload.map((item) => {
                const status = setStatus(item.orderStatus);
                // console.log({ status });
                return { ...item, status };
            });
            console.log("orders =", state.orders);
        },
        setOrder(state,action){
            state.order = action.payload;
            console.log("selected order =", state.order);
        }
    },
});

const setStatus = (orderStatus) => {
    // console.log({ orderStatus });
    if (orderStatus === "Completed" || orderStatus === "Cancelled") {
        return orderStatus;
    } else {
        return "On-going";
    }
};

export const { setOrders,setOrder } = orderSlice.actions;
export default orderSlice.reducer;

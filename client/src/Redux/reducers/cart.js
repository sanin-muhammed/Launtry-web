import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
    totalPrice: 0,
    service:"",
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push({
                ...action.payload,
                count: 1,
            });
        },
        increment: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.productId === productID) {
                    item.count++;
                }
            });
        },
        decrement: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item, index) => {
                if (item?.productId === productID) {
                    item.count--;
                }
                if (item.count === 0) {
                    state.cartList.splice(index, 1);
                }
            });
        },
        setTotalPrice: (state) => {
            state.totalPrice = state.cartList.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count * currentValue.price;
            }, 0);
        },
        setCartCount: (state) => {
            state.cartCount = state.cartList.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
            }, 0);
        },
        setService:(state,action)=>{
            state.service = action.payload
            console.log('service =',state.service);
        }
    },
});

export const { increment, decrement, addToCart, setTotalPrice, setCartCount,setService } = cartSlice.actions;

export default cartSlice.reducer;

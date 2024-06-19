import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import userIdReducer from "./reducers/userId";
import userReducer from "./reducers/user";
import bannerReducer from "./reducers/banners";
import offerReducer from "./reducers/offers";
import serviceReducer from "./reducers/services";
import productReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import instructionReducer from "./reducers/instructions";
 

const store = configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        banners: bannerReducer,
        offers: offerReducer,
        services: serviceReducer,
        products: productReducer,
        cart: cartReducer,
        instructions: instructionReducer,
    },
});

export default store;

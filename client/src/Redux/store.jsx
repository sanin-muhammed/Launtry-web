import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import userIdReducer from "./reducers/userId";
import userReducer from "./reducers/user";
import bannerReducer from "./reducers/banners";
import offerReducer from "./reducers/offers";
import serviceReducer from "./reducers/services";
const store = configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        banners: bannerReducer,
        offers: offerReducer,
        services: serviceReducer,
    },
});

export default store;

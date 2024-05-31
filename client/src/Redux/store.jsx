import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import userIdReducer from "./reducers/userId";
import userReducer from "./reducers/user";
import bannerReducer from "./reducers/banners";

const store = configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        banners: bannerReducer,
    },
});

export default store;

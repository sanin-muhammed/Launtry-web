import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import userIdReducer from './reducers/userId';

const store = configureStore({
  reducer: userIdReducer,
});

export default store;
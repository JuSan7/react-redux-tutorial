import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index"; // Assuming your root reducer is defined in reducers.js

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations (e.g., middleware, enhancers) can be added here
});

export default store;

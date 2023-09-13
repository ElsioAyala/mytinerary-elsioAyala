import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    user: userReducer,
  },
});

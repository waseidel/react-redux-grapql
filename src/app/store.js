import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import casosReducer from "../features/Casos/casosSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    casos: casosReducer,
  },
});

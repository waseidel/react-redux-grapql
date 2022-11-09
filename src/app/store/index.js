import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../containers/auth/authSlice";
import casosReducer from "../containers/CasosPage/casosSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    casos: casosReducer,
  },
});

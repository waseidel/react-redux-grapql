import { createSlice } from "@reduxjs/toolkit";

const namespace = "auth";

const initialState = {
  user: {},
  token: "",
  isLoading: true,
  error: false,
};

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLogin(state, action) {
      state.user = action.payload.login.user;
      state.token = action.payload.login.token;
      state.isLoading = false;
    },
  },
});

export const { setLogin } = authSlice.actions;

export const { user } = (state) => state.user;
export const { token } = (state) => state.token;

export default authSlice.reducer;

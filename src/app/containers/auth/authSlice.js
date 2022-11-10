import { createSlice } from "@reduxjs/toolkit";

const namespace = "auth";

const initialState = {
  user: null,
  token: "",
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLogin(state, action) {
      state.user = action.payload.login.user;
      state.token = action.payload.login.token;
      localStorage.setItem("token", JSON.stringify(state.token));
      state.isLoading = false;
    },
    setLogout(state) {
      state.user = null;
      state.token = "";
      localStorage.removeItem("token");
      state.isLoading = false;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload.loading;
    },
  },
});

export const { setLogin, setIsLoading, setLogout } = authSlice.actions;

export const { user } = (state) => state.user;
export const { token } = (state) => state.token;

export default authSlice.reducer;

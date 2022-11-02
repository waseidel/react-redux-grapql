import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isLoading: true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
});


export default authSlice.reducer;

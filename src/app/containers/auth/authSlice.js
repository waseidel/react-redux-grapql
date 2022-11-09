import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const namespace = "auth";

const initialState = {
  user: {},
  token: "",
  isLoading: true,
  error: false,
};

export const fetchLogin = createAsyncThunk(
  `${namespace}/login`,
  async ({ data }) => {
    console.log("Definition:", data);
    return data;
  }
);

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
});

// export const {} authSlice.actions

export const { user, token } = (state) => state;

export default authSlice.reducer;

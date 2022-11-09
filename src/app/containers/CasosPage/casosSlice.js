import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  casos: [],
  isLoading: true,
};

const casosSlice = createSlice({
  name: "casos",
  initialState,
  reducers: {
    setCasos(state, action) {
      state.casos = action.payload.casos;
      state.isLoading = false;
    },
  },
});

export const { setCasos } = casosSlice.actions;

export const { casos } = (state) => state.casos;
export const { isLoading } = (state) => state.isLoading;

export default casosSlice.reducer;

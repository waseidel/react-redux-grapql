import { createSlice } from "@reduxjs/toolkit";

const namespace = "casos";

const initialState = {
  casos: [],
  isLoading: true,
};

const casosSlice = createSlice({
  name: namespace,
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

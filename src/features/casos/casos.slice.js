import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  casos: []
}

export const casosSlice = createSlice({
  name: 'casos',
  initialState,
  reducers: {
    setCasosList: (state, action) => {
      state.casos = action.payload
    },
  },
})

export const selectCasosList = state => state.casos

export const { setCasosList } = casosSlice.actions

export default casosSlice.reducer

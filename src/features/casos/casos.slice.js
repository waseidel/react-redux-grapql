import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  casos: {},
}

export const casosSlice = createSlice({
  name: 'casos',
  initialState,
  reducers: {
    setCasosList: (state, action) => {
      console.log('Login', state, action)
    },

  },
})

export const selectCasosList = state => state.casos.casos

export const { setCasosList } = casosSlice.actions

export default casosSlice.reducer

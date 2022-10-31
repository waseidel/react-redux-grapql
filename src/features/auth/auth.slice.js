import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('Login', state, action)
    },
    logout: (state, action) => {
      console.log('Logout', state, action)
    },
    user: () => {
      console.log('user')
    }
  },
})

export const { login, logout, user } = authSlice.actions

export default authSlice.reducer

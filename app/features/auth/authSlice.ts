import { createSlice } from '@reduxjs/toolkit'
import { stateProp } from '@barajs/redux'

const initialState = {
  authenticating: false,
  authenticated: false,
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.authenticating = true
    },
    loginSuccess: (state, action) => {
      const { token } = action.payload
      state.authenticated = true
      state.token = token
    },
    logout: state => {
      state.authenticated = false
    },
  },
})

export const {
  actions: { login, loginSuccess, logout },
  reducer: authReducer,
} = authSlice

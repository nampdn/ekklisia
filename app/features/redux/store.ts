import {
  configureStore as config,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { authReducer } from '../auth'

const rootReducers = combineReducers({
  auth: authReducer,
})

export const configureStore = () => {
  const storeConfig = {
    reducer: rootReducers,
    middleware: [...getDefaultMiddleware()],
    devTools: __DEV__,
    enhancers: [],
  }
  return config(storeConfig)
}

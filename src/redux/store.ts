
import { configureStore } from '@reduxjs/toolkit'
import settingReducer from './slices/settingSlice'
 import cartReducer from '../components/shared/product/cartSlice'


export const store = configureStore({
  reducer: {
    setting: settingReducer,
     cart: cartReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './src/slices/cartSlice'
import { homeSlice } from './src/slices/homeSlice'
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        home: homeSlice,
    },
})
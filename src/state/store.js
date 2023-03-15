import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from './product.slice'

const reducer = combineReducers({
    products: productSlice.reducer
})

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production"
})

export default store
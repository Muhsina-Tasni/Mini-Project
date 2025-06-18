// for the storage fecility used redux store

import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './slice'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
const store=configureStore({
    
    reducer:{
        slice:sliceReducer,
        products:productReducer,
        cart: cartReducer
    }
})
export default store
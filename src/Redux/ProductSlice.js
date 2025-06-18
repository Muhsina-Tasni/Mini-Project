
import { createSlice } from "@reduxjs/toolkit";
// product slice for admin
const initial = JSON.parse(localStorage.getItem('products')) || [];

const productSlice = createSlice({
    name: 'products',
    initialState: initial,
    reducers: {
        // reducer to add product by admin and slso store in local srorage
        addProduct: (state, action) => {
            const newProduct = action.payload;
            state.push(newProduct);
            localStorage.setItem('products', JSON.stringify(state));
        },
        // reducer to delete the product by admin
        deleteProduct: (state, action) => {
            const idToDelete = action.payload;
            const updatedState = state.filter(product => product.id !== idToDelete);
            localStorage.setItem('products', JSON.stringify(updatedState));
            return updatedState;
        }

    }
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;


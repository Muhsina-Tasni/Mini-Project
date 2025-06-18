import { createSlice } from "@reduxjs/toolkit";
// cart slice for user
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {

    addToCart: (state, action) => {
      const product = action.payload;
      // find the clicked product id and store in existing
      const existing = state.find(item => item.id === product.id);
      // have any existing products in cart, add  clicked product to it and upgrade the quantity
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
// fpr remove from cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const index = state.findIndex(item => item.id === id);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          //  remove the product from the array.
          state.splice(index, 1);
        }
      }
    },
  clearCart: () => {
      return [];
    }
  },
});

export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;

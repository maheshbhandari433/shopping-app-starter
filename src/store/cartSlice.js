import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  // reducers is used for internal application logic
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // remove product from cart if it exists
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

// This should be used for reducers NOT extraReducers
export const { removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

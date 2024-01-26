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
    // Imagine the above as a function:
    // Imagine it looks like:
    // const addToCart = (state, action) => {
    // setCart([...cart, action.payload]);
    // };
  },
});

// This should be used for reducers NOT extraReducers
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  // reducers is used for internal application logic
  reducers: {
    addToCart: (state, action) => {
      // Previous implementation:
      // state.cart = [...state.cart, action.payload];
      // New implementation:
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id // action.payload === product [0, 1, 2, 3, 4] // if doesnt exist will return -1
      );
      if (index !== -1) {
        // the product was found in the cart array, and the index was returned.
        state.cart[index].quantity += 1;
      } else {
        // If the product was not found, -1 was returned from index, and the whole product will be added to the array with
        // a quantity.
        state.cart.push({ ...action.payload, quantity: 1 }); // this takes the product object and creates a new object with the same
        // properties and adds a new property called quantity with a value of 1.
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // remove product from cart if it exists
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    reducerQuantityByOne: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
});

// This should be used for reducers NOT extraReducers
export const { removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

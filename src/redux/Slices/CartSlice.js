import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const result = state.find((product) => product.id === action.payload.id);
      if (!result) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
      // return state.filter((product) => product !== action.payload);
      // in JavaScript the object are compared by reference....so product !== action.payload will not work beacuse 2 product are same but there reference are different
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;

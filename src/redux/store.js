import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import themeReducer from "./Slices/ThemeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;

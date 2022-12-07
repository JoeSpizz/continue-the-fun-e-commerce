import { configureStore } from "@reduxjs/toolkit";

// import catsReducer from "./features/cats/catsSlice";
import wishlistReducer from "./features/Login_User/wishlistSlice";
import cartReducer from "./features/MarketPlace/cartSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer
  },
});

export default store;

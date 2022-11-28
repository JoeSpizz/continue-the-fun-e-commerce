import { configureStore } from "@reduxjs/toolkit";

// import catsReducer from "./features/cats/catsSlice";
import wishlistReducer from "./features/Login_User/wishlistSlice";

const store = configureStore({
  reducer: {
    // cats: catsReducer,
    wishlist: wishlistReducer
  },
});

export default store;

// Action Creators
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// async actions
export const fetchWishlist = createAsyncThunk("wishlist/fetchwishlist", () => {
  // return a Promise containing the data we want
  return fetch("/wishlists")
    .then((response) => response.json())
    .then((data) => data);
});


// sync actions added for demo purposes


// Reducer
const initialState = {
  entities: [], // array of wishlisted games
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers:{
    wishlistAdded(state,action){
      state.entities.push(action.payload)
      return state.entities
    },
    wishlistUpdated(state,action){
      const cat = state.entities.find((cat)=> cat.id === action.payload.id)
      cat.url = action.payload.url
    },
  },
    extraReducers: {
      [fetchWishlist.pending](state){
        state.status="loading";
      },
      [fetchWishlist.fulfilled](state,action){
        state.entities = action.payload;
        state.status="idle";
      },
    },
})
export default wishlistSlice.reducer
export const {catAdded, catUpdated } = wishlistSlice.actions
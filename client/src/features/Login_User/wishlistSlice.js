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
    },
    wishlistRemoved(state,action){
        const id = action.payload.id
        const list = state.entities.filter(item=> item.id!==id)
       state.entities = list
       return state
    }
  },
    extraReducers: {
      [fetchWishlist.fulfilled](state,action){
        state.entities = action.payload;
      },
    },
})
export default wishlistSlice.reducer
export const {catAdded, catUpdated } = wishlistSlice.actions
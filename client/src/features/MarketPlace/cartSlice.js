// Action Creators
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// async actions
export const fetchCart = createAsyncThunk("cart/fetchcart", () => {
  // return a Promise containing the data we want
  return fetch("/carts")
    .then((response) => response.json())
    .then((data) => data);
});

// Reducer
const initialState = {
  entities: [], // array of games in a user's cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    cartAdded(state,action){
      state.entities.push(action.payload)
    },
    cartRemoved(state,action){
        const id = action.payload.id
        const list = state.entities.filter(item=> item.id!==id)
       state.entities = list
       return state
    }
  },
    extraReducers: {
      [fetchCart.fulfilled](state,action){
        state.entities = action.payload;
      },
    },
})
export default cartSlice.reducer
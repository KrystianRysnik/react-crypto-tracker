import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cryptocurrencySlice = createSlice({
  name: "cryptocurrency",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter((crypto) => crypto.id !== action.payload);
    }
  }
});

export const { add, remove } = cryptocurrencySlice.actions;
export default cryptocurrencySlice.reducer;

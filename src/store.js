import { configureStore } from "@reduxjs/toolkit";
import cryptocurrencyReducer from "./features/cryptocurrency/cryptocurrenySlice";
import { loadState } from "./browserStorage";

const store = configureStore({
  reducer: {
    cryptocurrency: cryptocurrencyReducer
  },
  preloadedState: loadState()
});

export default store;

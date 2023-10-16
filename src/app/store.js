import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice"; // Replace this with the correct import path

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
   
  },
});





// TODO: Configure the store to use the reducer from the transactions slice.

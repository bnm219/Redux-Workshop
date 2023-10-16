import { configureStore } from "@reduxjs/toolkit";
import { withdrawal, deposit, transfer } from "../features/transactions/transactionsSlice"; // Replace this with the correct import path

export default store = configureStore({
  reducer: {
    transactions: transactionsReducer,
   
  },
});





// TODO: Configure the store to use the reducer from the transactions slice.

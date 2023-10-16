import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";
<<<<<<< HEAD
import { store } from "@reduxjs/toolkit";
=======
import  store  from "./store";
import Provider from "react-redux";
import React from "react";
>>>>>>> 7dc68c2cccc376418c692ab2990ec0db8be4c436

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = (store) => {
  return (
     <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
       <TransactionHistory />
      </main>
    </Provider> 
  );
};

export default App;










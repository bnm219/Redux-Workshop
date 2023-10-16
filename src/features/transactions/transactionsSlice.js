import { createSlice } from "@reduxjs/toolkit";

/**
 * Each transaction is recorded as an object with the following properties.
 * @typedef Transaction
 * @property {"deposit"|"withdrawal"|"transfer/[name]"} type
 * @property {number} amount
 * @property {number} balance - The balance after the transaction is completed.
 */

// TODO: Set initial state to have a balance of 0 and an empty array of transactions.
import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
/** @type {{balance: number, history: Transaction[]}} */
const initialState = {
  balance: 0,
  transactions: []
};

/* TODO
Add two reducers  to the transactions slice: "deposit" and "transfer".
Both reducers update the balance and then record the transaction.

"deposit" should increase the balance by the amount in the payload,
while "transfer" should decrease the balance by the amount in the payload.

Refer to the "withdrawal" reducer, which is already implemented for you.
*/
=======
const initialState = {
  balance: 0,
  history: [],
};
>>>>>>> 7dc68c2cccc376418c692ab2990ec0db8be4c436

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    withdrawal: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: "withdrawal",
        amount: payload.amount,
        balance: state.balance,
      });
    },
<<<<<<< HEAD
    deposit:(state, { payload }) =>{
=======
    deposit: (state, { payload }) => {
>>>>>>> 7dc68c2cccc376418c692ab2990ec0db8be4c436
      state.balance += payload.amount;
      state.history.push({
        type: "deposit",
        amount: payload.amount,
        balance: state.balance,
<<<<<<< HEAD
      })
    },
    transfer:(state, { payload })=>{
      state.balance -= payload.amount;
      state.history.push({
        type: "deposit",
        amount: payload.amount,
        balance: state.balance,
      })
    }
=======
      });
    },
    transfer: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: `transfer/${payload.name}`,
        amount: payload.amount,
        balance: state.balance,
      });
    },
>>>>>>> 7dc68c2cccc376418c692ab2990ec0db8be4c436
  },
});

export const { deposit, withdrawal, transfer } = transactionsSlice.actions;

export const selectBalance = (state) => state.transactions.balance;
export const selectHistory = (state) => state.transactions.history;

export default transactionsSlice.reducer;

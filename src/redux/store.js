import { configureStore, createSlice } from "@reduxjs/toolkit";
export const accountSlice = createSlice({
  name: "account",
  initialState: {
    balance: 1000,
    holder: "cdac",
    acnumber: "MUM00001",
  },
  reducers: {
    deposit: (state) => {
      state.balance += 100;
    },
    withdraw: (state) => {
      state.balance -= 10;
    },
  },
});

export let { deposit, withdraw } = accountSlice.actions;
import accountSliceReducer from "./accountSlice";
export default configureStore({
  reducer: {
    account: accountSlice.reducer,
    account: accountSliceReducer,
  },
});
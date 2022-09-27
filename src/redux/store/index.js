import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { unitsSlice } from "../reducer/unitsReducer";

const store = configureStore({
  reducer: {
    unit: unitsSlice.reducer,
  },
});

export default store;

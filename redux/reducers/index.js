import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "../../features/basketSlice";
import { productReducer } from "./productReducers";

const reducers = combineReducers({
  basket: basketReducer,
  allProducts: productReducer,
});

export default reducers;

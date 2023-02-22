import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "../../features/basketSlice";
import restaurantReducer from "../../features/restaurantSlice";
import { productReducer } from "./productReducers";

const reducers = combineReducers({
  basket: basketReducer,
  restaurant: restaurantReducer,
  allProducts: productReducer,
});

export default reducers;

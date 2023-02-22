import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const composeEnhancers = composeWithDevTools({});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});

//export const store = configureStore({ reducer }, composeWithDevTools());

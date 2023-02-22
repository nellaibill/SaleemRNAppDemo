import { ActionTypes } from "../constants/action-types";

const initialState = {
  categories: [],
  productsByCategories: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.FETCH_PRODUCTS_BY_CATEGORY:
      return { ...state, productsByCategories: payload };
    case ActionTypes.FETCH_PRODUCTS_BY_ID:
      return { ...state, selectedProduct: payload };
    default:
      return state;
  }
};

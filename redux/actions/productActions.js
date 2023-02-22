import { ActionTypes } from "../constants/action-types";
import storeApi from "../../apis/storeApi";


export const fetchCategories = () => async (dispatch) => {
  const response = await storeApi.get("/products/categories");
  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
};

export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
  const response = await storeApi.get("/products/category/" + categoryName);
  console.log("fetchProductsByCategory", categoryName);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS_BY_CATEGORY,
    payload: response.data.products,
  });
  return Promise.resolve();
};

export const fetchProductsById = (id) => async (dispatch) => {
  const response = await storeApi.get("/products/" + id);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS_BY_ID,
    payload: response.data,
  });
  return Promise.resolve();
};

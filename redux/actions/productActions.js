import { ActionTypes } from "../constants/action-types";
import dummyJsonApi from "../../apis/dummyJsonApi";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await dummyJsonApi.get("/products/categories");
  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
};

export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
  const response = await dummyJsonApi.get("/products/category/" + categoryName);
  console.log("fetchProductsByCategory", categoryName);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS_BY_CATEGORY,
    payload: response.data.products,
  });
  return Promise.resolve();
};

export const fetchProductsById = (id) => async (dispatch) => {
  const response = await dummyJsonApi.get("/products/" + id);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS_BY_ID,
    payload: response.data,
  });
  return Promise.resolve();
};

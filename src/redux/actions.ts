import { ADD_PRODUCT, DELETE_PRODUCT, ADD_TO_CART } from "./actionTypes";

let nextProductId = 3;

export const addProduct = (content: object) => ({
  type: ADD_PRODUCT,
  payload: {
    id: nextProductId++,
    content,
  },
});

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  payload: { id },
});

export const addToCart = (id: number) => ({
  type: ADD_TO_CART,
  payload: { id },
});

import { ADD_PRODUCT, DELETE_PRODUCT,} from "./actionTypes";

let nextProductId = 3;

export const addProduct = (content: object) => ({
  type: ADD_PRODUCT,
  payload: {
    id: nextProductId++,
    content
  }
});

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  payload: { id }
});


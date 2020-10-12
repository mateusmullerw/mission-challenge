import { ADD_TO_CART, DELETE_ITEM_FROM_CART } from "../actionTypes";

interface IAction {
  type: string;
  payload: { id: number };
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const initialState = {
  cart: [],
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.payload;
      return {
        ...state,
        cart: [...state.cart, id],
      };
    }
    case DELETE_ITEM_FROM_CART: {
      const { id } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product !== id
        ),
      };
    }
    default:
      return state;
  }
}

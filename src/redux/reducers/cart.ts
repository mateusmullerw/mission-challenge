import { ADD_TO_CART } from "../actionTypes";

interface IAction {
  type: string;
  payload: { id: number };
}

const initialState = {
  cart: [],
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.payload;
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, id],
      };
    }
    default:
      return state;
  }
}

import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes";

interface IAction {
  type: string;
  payload: { id: number; content: { name: string; price: number } };
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const initialState = {
  products: [
    {
      id: 0,
      name: "Produto 1",
      price: 30000,
    },
    {
      id: 1,
      name: "Produto 2",
      price: 70000,
    },
    {
      id: 2,
      name: "Produto 3",
      price: 5000,
    },
  ],
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, content } = action.payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: id,
            name: content.name,
            price: content.price,
          },
        ],
      };
    }
    case DELETE_PRODUCT: {
      const { id } = action.payload;
      return {
        ...state,
        products: state.products.filter(
          (product: IProduct) => product.id !== id
        ),
      };
    }
    default:
      return state;
  }
}

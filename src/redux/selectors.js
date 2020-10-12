export const getProducts = (store) => store.products;

export const getProductById = (store, id) => {
  return getProducts(store).products.find((product) => product.id === id);
};

export const getCart = (store) => store.cart;

export const getCartProducts = (store) => {
  let cart = getCart(store).cart.map((id) => getProductById(store, id));
  return { cart };
};

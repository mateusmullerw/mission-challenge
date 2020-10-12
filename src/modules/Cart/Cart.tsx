import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import { getCartProducts } from "../../redux/selectors";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import { formatPrice } from "../../utils/formatPrice";
import Container from "../../components/Container/Container";

interface IStore {
  cart: Array<IProduct>;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const Cart = (props: IStore) => {
  const products = props.cart;

  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice = totalPrice + product.price;
  });

  const formattedPrice = totalPrice && formatPrice(totalPrice.toString());

  return (
    <div className="cart">
      <Container>
        <PageTitle title="Carrinho" />
        {products && products.length ? (
          <div className="cart__resume">
            {products.map((product: IProduct) => {
              return <CartItem key={product.id} product={product} />;
            })}
            <p className="cart__total-price">
              <span>Preço total:</span>
              {` R$ ${formattedPrice}`}
            </p>
          </div>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: IStore) => getCartProducts(state);

export default connect(mapStateToProps)(Cart);

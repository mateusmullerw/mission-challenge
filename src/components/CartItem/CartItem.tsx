import React from "react";
import "./CartItem.scss";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import { formatPrice } from "../../utils/formatPrice";

interface ICartItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
  deleteProduct: Function;
  key: number;
}

const CartItem = (props: ICartItemProps) => {
  const { price, name } = props.product;

  const formattedPrice = price && formatPrice(price.toString());

  return (
    <div key={props.key} className="card-item">
      <div className="card-item__info">
        <h4 className="card-item__name">{name}</h4>
        <p className="card-item__price">{`R$ ${formattedPrice}`}</p>
      </div>
    </div>
  );
};

export default connect(null, { deleteProduct })(CartItem);

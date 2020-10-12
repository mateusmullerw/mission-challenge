import React from "react";
import "./ProductCardAdmin.scss";
import { connect } from "react-redux";
import { deleteProduct, deleteItemFromCart } from "../../redux/actions";
import Button from "../Button/Button";
import { formatPrice } from "../../utils/formatPrice";

interface IProductCardProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
  deleteProduct: Function;
  deleteItemFromCart: Function;
  key: number;
}

const ProductCard = (props: IProductCardProps) => {
  const { id, price, name } = props.product;

  const formattedPrice = price && formatPrice(price.toString());

  const handleDelete = (id: number) => {
    props.deleteProduct(id);
    props.deleteItemFromCart(id);
  };

  return (
    <div key={props.key} className="product-card-adm">
      <div className="product-card-adm__info">
        <h4 className="product-card-adm__name">{name}</h4>
        <p className="product-card-adm__price">{`R$ ${formattedPrice}`}</p>
      </div>
      <Button label="Deletar" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default connect(null, { deleteProduct, deleteItemFromCart })(ProductCard);

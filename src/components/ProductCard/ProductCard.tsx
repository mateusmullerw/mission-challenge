import React from "react";
import "./ProductCard.scss";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import Button from "../Button/Button";

interface IProductCardProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
  deleteProduct: Function;
  key: number;
}

const ProductCard = (props: IProductCardProps) => {
  const { id, price, name } = props.product;

  function formatPrice(price: string) {
    let newPrice = price;
    newPrice = newPrice.replace(/([0-9]{2})$/g, ",$1");
    if (newPrice.length > 6)
      newPrice = newPrice.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    return newPrice;
  }

  const formattedPrice = price && formatPrice(price.toString());

  const handleDelete = (id: number) => {
    props.deleteProduct(id);
  };

  return (
    <div key={props.key} className="product-card">
      <div className="product-card__info">
        <h4 className="product-card__name">{name}</h4>
        <p className="product-card__price">{`R$ ${formattedPrice}`}</p>
      </div>
      <Button label="Deletar" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default connect(null, { deleteProduct })(ProductCard);

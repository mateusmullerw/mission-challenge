import React, { useState } from "react";
import "./ProductCard.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import Button from "../Button/Button";
import { formatPrice } from "../../utils/formatPrice";

interface IProductCardProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
  addToCart: Function;
  key: number;
}

const ProductCard = (props: IProductCardProps) => {
  const { id, price, name } = props.product;

  const [isLoading, setIsLoading] = useState(false);

  const formattedPrice = price && formatPrice(price.toString());

  const handleAddToCart = (id: number) => {
    setIsLoading(true);
    setTimeout(() => {
      props.addToCart(id);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div key={props.key} className="product-card">
      <div className="product-card__img" />
      <div className="product-card__info">
        <h4 className="product-card__name">{name}</h4>
        <p className="product-card__price">{`R$ ${formattedPrice}`}</p>
        <Button
          fullWidth
          label="Adicionar ao carrinho"
          isLoading={isLoading}
          onClick={() => handleAddToCart(id)}
        />
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ProductCard);

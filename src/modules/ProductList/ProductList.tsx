import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import { getProducts } from "../../redux/selectors";
import ProductCardAdmin from "../../components/ProductCardAdmin/ProductCardAdmin";

interface IState {
  products: Array<IProduct>;
  cart: Array<number>;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const ProductList = (props: IState) => {
  const products = props.products;
  return (
    <>
      <PageTitle title="Produtos" />
      {products && products.length ? (
        products.map((product: IProduct) => {
          return <ProductCardAdmin key={product.id} product={product} />;
        })
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => getProducts(state);

export default connect(mapStateToProps)(ProductList);

import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import { getProducts } from "../../redux/selectors";
import ProductCard from "../../components/ProductCard/ProductCard";

interface IState {
  products: Array<IProduct>;
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
        products.map((product: IProduct, index: number) => {
          return <ProductCard key={index} product={product} />;
        })
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => getProducts(state);

export default connect(mapStateToProps)(ProductList);

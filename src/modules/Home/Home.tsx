import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import { getProducts } from "../../redux/selectors";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.scss";
import Container from "../../components/Container/Container";

interface IStore {
  products: Array<IProduct>;
  cart: Array<number>;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const ProductList = (props: IStore) => {
  const products = props.products;
  return (
    <div className="home">
      <Container>
      <PageTitle title="Vitrine" />
      <div className="product-container">
        {products && products.length ? (
          products.map((product: IProduct, index: number) => {
            return <ProductCard key={index} product={product} />;
          })
        ) : (
          <p>Nenhum produto cadastrado.</p>
        )}
      </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: IStore) => getProducts(state);

export default connect(mapStateToProps)(ProductList);

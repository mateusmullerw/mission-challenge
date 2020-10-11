import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterProduct from "../RegisterProduct/RegisterProduct";
import ProductList from "../ProductList/ProductList";

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Redirect exact from="/home" to="/home/cadastro" />
      <Route exact path={`/home/cadastro`} component={RegisterProduct} />
      <Route exact path={`/home/produtos`} component={ProductList} />
    </Switch>
  </div>
);

export default Routes;

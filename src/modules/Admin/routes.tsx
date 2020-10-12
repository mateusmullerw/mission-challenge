import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterProduct from "../RegisterProduct/RegisterProduct";
import ProductList from "../ProductList/ProductList";

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Redirect exact from="/admin" to="/admin/cadastro" />
      <Route exact path={`/admin/cadastro`} component={RegisterProduct} />
      <Route exact path={`/admin/produtos`} component={ProductList} />
    </Switch>
  </div>
);

export default Routes;

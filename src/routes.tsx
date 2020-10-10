import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "./modules/Cart/Cart";
import Home from "./modules/Home/Home";

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path={`/home`} component={Home} />
      <Route exact path={`/carrinho`} component={Cart} />
    </Switch>
  </div>
);

export default Routes;

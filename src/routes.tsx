import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./modules/Cart/Cart";
import Admin from "./modules/Admin/Admin";
import Home from "./modules/Home/Home";
const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/carrinho`} component={Cart} />
      <Route path={`/admin`} component={Admin} />
    </Switch>
  </div>
);

export default Routes;

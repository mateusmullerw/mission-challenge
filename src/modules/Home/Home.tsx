import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HomeRoutes from "./routes";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/carrinho">Cart</Link>
      <Router>
        <ul>
          <li>
            <Link to="/home/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/home/lista">Lista</Link>
          </li>
        </ul>
        <HomeRoutes />
      </Router>
    </div>
  );
}

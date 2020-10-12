import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
        Mission Challenge
      </Link>
      <div className="navbar__link-container">
        <Link className="navbar__link" to="/">
          Vitrine
        </Link>
        <Link className="navbar__link" to="/carrinho">
          Carrinho
        </Link>
        <Link className="navbar__link" to="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoutes from "./routes";
import "./Home.scss";
import MenuItem from "../../components/MenuItem/MenuItem";
import MenuActiveIndicator from "../../components/MenuActiveIndicator/MenuActiveIndicator";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/home/produtos"
      ? setActiveItem(1)
      : setActiveItem(0);
  }, [location.pathname]);

  return (
    <div className="home">
      <Router>
        <div className="menu">
          <h3 className="menu__title">Admin</h3>
          <ul className="menu__list">
            <MenuActiveIndicator activeItem={activeItem} />
            <MenuItem
              to="/home/cadastro"
              label="Cadastrar produto"
              active={activeItem === 0}
              onClick={() => setActiveItem(0)}
            />
            <MenuItem
              to="/home/produtos"
              label="Produtos"
              active={activeItem === 1}
              onClick={() => setActiveItem(1)}
            />
          </ul>
        </div>
        <div className="content">
          <HomeRoutes />
        </div>
      </Router>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./routes";
import "./Admin.scss";
import MenuItem from "../../components/MenuItem/MenuItem";
import MenuItemActiveIndicator from "../../components/MenuItemActiveIndicator/MenuItemActiveIndicator";
import { useLocation } from "react-router-dom";
import isMobile from "../../utils/isMobile";

export default function Admin() {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/admin/produtos"
      ? setActiveItem(1)
      : setActiveItem(0);
  }, [location.pathname]);

  const adminPages = [
    {
      label: "Cadastrar produto",
      to: "/admin/cadastro",
    },
    {
      label: "Produtos",
      to: "/admin/produtos",
    },
  ];

  return (
    <div className={`admin ${isMobile() ? "admin--mobile" : ""}`}>
      <Router>
        <div className="menu">
          <h3
            className={`menu__title ${isMobile() ? "menu__title--mobile" : ""}`}
          >
            Admin
          </h3>
          <ul
            className={`menu__list ${isMobile() ? "menu__list--mobile" : ""}`}
          >
            <MenuItemActiveIndicator
              activeItem={activeItem}
              tabAmount={adminPages.length}
            />
            {adminPages.map((page, index) => {
              return (
                <MenuItem
                  key={page.to}
                  to={page.to}
                  label={page.label}
                  active={activeItem === index}
                  onClick={() => setActiveItem(index)}
                />
              );
            })}
          </ul>
        </div>
        <div className="content">
          <AdminRoutes />
        </div>
      </Router>
    </div>
  );
}

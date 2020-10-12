import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import isMobile from "../../utils/isMobile";

const menuLinks = [
  {
    label: "Vitrine",
    to: "/",
  },
  {
    label: "Carrinho",
    to: "/carrinho",
  },
  {
    label: "Admin",
    to: "/admin",
  },
];
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleOpen = () => {
    setisMenuOpen(true);
  };
  const handleClose = () => {
    setisMenuOpen(false);
  };
  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
        Mission Challenge
      </Link>
      {isMobile() ? (
        <>
          <button onClick={() => handleOpen()} className="navbar__button">
            <i className="material-icons">menu</i>
          </button>
          <div
            className={`navbar__menu--mobile ${
              isMenuOpen ? "navbar__menu--mobile--open" : ""
            }`}
          >
            <button
              onClick={() => handleClose()}
              className="navbar__button navbar__button--close"
            >
              <i className="material-icons">close</i>
            </button>
            {menuLinks.map((link) => {
              return (
                <Link
                  key={link.to}
                  onClick={() => handleClose()}
                  className="navbar__link navbar__link--mobile"
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <div className="navbar__menu">
          {menuLinks.map((link) => {
            return (
              <Link key={link.to} className="navbar__link" to={link.to}>
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./MenuItem.scss";
import { Link } from "react-router-dom";

interface IMenuItemProps {
  to: string;
  label: string;
  active: boolean;
  onClick: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MenuItem = (props: IMenuItemProps) => {
  const { to, label, active, onClick } = props;

  return (
    <Link
      className={`menu-item ${active ? "menu-item--active" : ""}`}
      to={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default MenuItem;

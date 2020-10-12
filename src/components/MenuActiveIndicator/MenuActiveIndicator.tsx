import React from "react";
import "./MenuActiveIndicator.scss";

interface IButtonProps {
  activeItem: number;
}

const MenuActiveIndicator = (props: IButtonProps) => {
  const { activeItem } = props;

  return (
    //activeItem * MenuItem height(line-height + padding)
    <div
      className="menu-active-indicator"
      style={{ top: `${activeItem * 3}rem` }}
    ></div>
  );
};

export default MenuActiveIndicator;

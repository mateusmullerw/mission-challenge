import React from "react";
import "./MenuItemActiveIndicator.scss";
import isMobile from "../../utils/isMobile";

interface IButtonProps {
  activeItem: number;
  tabAmount: number;
}

const MenuItemActiveIndicator = (props: IButtonProps) => {
  const { activeItem, tabAmount } = props;

  if (isMobile()) {
    return (
      <div
        className="menu-active-indicator menu-active-indicator--mobile"
        style={{
          width: `${100 / tabAmount}%`,
          left: `${(activeItem * 100) / tabAmount}%`,
        }}
      />
    );
  } else {
    return (
      <div
        className="menu-active-indicator"
        style={{ top: `${activeItem * 3}rem` }}
      />
    );
  }
};

export default MenuItemActiveIndicator;

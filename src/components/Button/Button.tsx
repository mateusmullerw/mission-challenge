import React from "react";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import "./Button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label: string;
  fullWidth?: boolean;
}

const Button = (props: IButtonProps) => {
  const { isLoading, label, fullWidth, ...rest } = props;

  return (
    <button
      className={`button ${isLoading ? "button--loading" : ""} ${
        fullWidth ? "button--full-width" : ""
      }`}
      {...rest}
    >
      {label}
      {isLoading ? <LoadingCircle /> : ""}
    </button>
  );
};

export default Button;

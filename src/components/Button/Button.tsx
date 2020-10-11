import React from "react";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import "./Button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label: string;
}

const Button = (props: IButtonProps) => {
  const { isLoading, label, ...rest } = props;

  return (
    <button
      className={`button ${isLoading ? "button--loading" : ""}`}
      {...rest}
    >
      {label}
      {isLoading ? <LoadingCircle /> : ""}
    </button>
  );
};

export default Button;

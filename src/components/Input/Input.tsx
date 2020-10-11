import React from "react";
import "./Input.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  caption?: string;
  disabled?: boolean;
}
const Input = (props: IInputProps) => {
  const {
    label,
    caption,
    disabled,
    ...rest
  } = props;

  return (
    <label className="input">
      {label}
      <input
        className="input__field"
        disabled={disabled}
        {...rest}
      />
      <p className="input__caption">{caption}</p>
    </label>
  );
};

export default Input;

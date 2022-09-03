import React from "react";
import "./Button.css";

interface IButtonProps {
  children?: React.ReactNode;
  style?: Object;
  onClick?(args: any): void;
}

function Button({ children, style, onClick }: IButtonProps) {
  return (
    <button onClick={onClick} className="btn" style={style}>
      {children}
    </button>
  );
}

export default Button;

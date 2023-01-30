import React from "react";
import "./Button.css";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButton) => {
  return <button className="custom-button" onClick={onClick}>{children}</button>;
};

export default Button;

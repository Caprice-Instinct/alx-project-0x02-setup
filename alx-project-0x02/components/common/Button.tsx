import React from "react";
import { type ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  ...rest
}) => {
  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none ${sizeClasses[size]} ${shapeClasses[shape]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

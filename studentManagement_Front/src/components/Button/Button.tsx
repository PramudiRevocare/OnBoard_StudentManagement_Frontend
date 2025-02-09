// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick }) => {
  const baseClass = "px-6 py-3 rounded-lg font-medium";
  const styles =
    variant === "primary"
      ? "bg-yellow-500 text-white hover:bg-yellow-600"
      : "border border-yellow-500 text-yellow-500 hover:bg-yellow-50";

  return (
    <button className={`${baseClass} ${styles}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

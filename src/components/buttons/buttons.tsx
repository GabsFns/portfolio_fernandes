import styles from "./buttons.module.scss";
import React from "react";

type ButtonProps = {
  text: string;
  variant?: "color-1" | "color-2" | "color-3" | "color-4" | "color-5" | "color-6";
  onClick?: () => void,
  className?: string; 
  
};

const CustomButton: React.FC<ButtonProps> = ({ text, variant = "color-1", onClick, className }) => {
  return (
    <button
    className={`${styles["custom-button"]} ${styles[variant]} ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
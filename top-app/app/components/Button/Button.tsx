"use client";

import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {};

  return (
    <button
      className={styles.button}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

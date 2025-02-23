"use client";

import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;

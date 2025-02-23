import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

const Input: React.FC<InputProps> = ({
  type = "text",
  register,
  name,
  required,
  pattern,
  error,
  placeholder,
  className,
  onFocus,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        {...register(name, { required, pattern })}
        className={`${error ? styles.errorInput : ""} ${className}`}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

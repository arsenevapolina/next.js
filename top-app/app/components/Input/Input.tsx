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

  const isRequired = required ? required.value : false;

  return (
    <div className={styles.inputWrapper}>
      <input
        id={name}
        type={type}
        {...register(name, { required, pattern })}
        className={`${error ? styles.errorInput : ""} ${className}`}
        onFocus={onFocus}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${name}-error`}
        aria-label={placeholder}
        required={isRequired}
      />
      {error && (
        <span id={`${name}-error`} className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

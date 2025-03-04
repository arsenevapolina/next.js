import React from "react";
import styles from "./TextArea.module.css";
import { TextAreaProps } from "./TextArea.props";

const TextArea: React.FC<TextAreaProps> = ({
  register,
  name,
  required,
  error,
  onFocus,
  placeholder,
  className,
}) => {

  const isRequired = required ? required.value : false;

  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        id={name}
        {...register(name, { required })}
        className={`${error ? styles.errorInput : ""} ${className}`}
        onFocus={onFocus}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
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

export default TextArea;

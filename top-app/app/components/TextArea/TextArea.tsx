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
  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        {...register(name, { required })}
        className={`${error ? styles.errorInput : ""} ${className}`}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;

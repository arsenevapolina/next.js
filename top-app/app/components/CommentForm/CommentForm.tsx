import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";
import { FormData } from "./CommentForm.props";
import useSubmitComment from "@/app/helpers/useSubmitComment";
import styles from "./CommentForm.module.css";

const CommentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormData>();

  const {
    successMessage,
    errorMessage,
    submitComment,
    setSuccessMessage,
    setErrorMessage,
  } = useSubmitComment();

  const onSubmit = (data: FormData) => {
    submitComment(data);
  };

  const handleFocus = (name: keyof FormData) => {
    setFocus(name);
  };

  return (
    <div>
      {successMessage && (
        <Notification
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
      {errorMessage && (
        <Notification
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          name="name"
          register={register}
          required={{ value: true, message: "Введите имя" }}
          error={!!errors.name}
          onFocus={() => handleFocus("name")}
          placeholder="Имя"
          className={styles.input}
        />
        <div className={styles.errorMessage}>{errors.name?.message}</div>
        <Input
          type="email"
          name="email"
          register={register}
          required={{ value: true, message: "Введите email" }}
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email должен содержать  @",
          }}
          error={!!errors.email}
          onFocus={() => handleFocus("email")}
          placeholder="Email"
          className={styles.input}
        />
        <div className={styles.errorMessage}>{errors.email?.message}</div>

        <TextArea
          name="comment"
          register={register}
          required={{ value: true, message: "Введите комментарий" }}
          error={!!errors.comment}
          onFocus={() => handleFocus("comment")}
          placeholder="Комментарий"
          className={styles.textArea}
        />

        <div className={styles.errorMessage}>{errors.comment?.message}</div>

        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
};

export default CommentForm;

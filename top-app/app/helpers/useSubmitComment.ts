import { useState } from "react";

interface CommentData {
  name: string;
  email: string;
  comment: string;
}

const useSubmitComment = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitComment = async (data: CommentData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, postId: 1 }),
        }
      );

      if (!response.ok) {
        throw new Error("Не удалось отправить комментарий");
      }

      const result = await response.json();
      console.log(result);
      setSuccessMessage("Комментарий отправлен");
      setErrorMessage(null);
    } catch (error) {
      console.error(error);
      setSuccessMessage(null);
      setErrorMessage("Не удалось отправить комментарий. Попробуйте еще раз");
    }
  };

  return {
    successMessage,
    errorMessage,
    submitComment,
    setSuccessMessage,
    setErrorMessage,
  };
};

export default useSubmitComment;

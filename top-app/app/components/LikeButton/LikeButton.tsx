"use client";

import { useState } from "react";
import { ButtonLikeProps } from "./LikeButton.props";
import styles from "./LikeButton.module.css";
import LikeIconActive from "../LikeIconActive/LikeIconActive";
import LikeIcon from "../LikeIcon/LikeIcon";

const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
  const [activeState, setActiveState] = useState<boolean>(false);

  const handleClick = () => {
    if (!activeState && onChange) {
      onChange();
    }
    setActiveState((active) => !active);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${styles.button} ${activeState ? styles.buttonActive : ""}`}
      aria-pressed={activeState}
    >
      {activeState ? <LikeIconActive /> : <LikeIcon />}
    </button>
  );
};

export default ButtonLike;

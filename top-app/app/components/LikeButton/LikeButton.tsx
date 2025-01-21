import { useState } from "react";
import { ButtonLikeProps } from "./LikeButton.props";
import styles from "./LikeButton.module.css";
import LikeIconActive from "../LikeIconActive/LikeIconActive";
import LikeIcon from "../LikeIcon/LikeIcon";

const ButtonLike = ({ onChange, ...props }: ButtonLikeProps) => {
  const [activeState, setActiveState] = useState<boolean>(false);

  return (
    <button
      {...props}
      onClick={() => {
        if (onChange) {
          onChange();
        }
        setActiveState((active) => !active);
      }}
      className={`${styles.button} ${activeState ? styles.buttonActive : ""}`}
    >
      {activeState ? <LikeIconActive /> : <LikeIcon />}
    </button>
  );
};

export default ButtonLike;

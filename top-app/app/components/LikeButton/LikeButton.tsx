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

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`${styles.button} ${activeState ? styles.buttonActive : ""}`}
    >
      {activeState ? <LikeIconActive /> : <LikeIcon />}
    </button>
  );
};

export default ButtonLike;

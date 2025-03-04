import React, { JSX } from "react";
import Image from "next/image";
import styles from "./LikesWrapper.module.css";
import { LikesWrapperProps } from "./LikesWrapper.props";

export default function LikesWrapper({
  likes,
}: LikesWrapperProps): JSX.Element {
  return (
    <div
      className={styles["like-wrapper"]}
      role="button"
      tabIndex={0}
      aria-label={`Количество лайков: ${likes}`}
    >
      <div className={styles["time"]}>{likes}</div>
      <Image
        src="/small-like-icon.svg"
        alt="Иконка лайка"
        width={16}
        height={16}
      />
    </div>
  );
}

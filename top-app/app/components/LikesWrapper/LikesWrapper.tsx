import React, { JSX } from "react";
import Image from "next/image";
import styles from "./LikesWrapper.module.css";
import { LikesWrapperProps } from "./LikesWrapper.props";

export default function LikesWrapper({
  likes,
}: LikesWrapperProps): JSX.Element {
  return (
    <div className={styles["like-wrapper"]}>
      <span className={styles["time"]}>{likes}</span>
      <Image
        src="/small-like-icon.svg"
        alt="like-icon"
        width={16}
        height={16}
      />
    </div>
  );
}

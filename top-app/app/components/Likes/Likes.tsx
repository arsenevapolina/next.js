import React, { JSX } from "react";
import Image from "next/image";
import styles from "./Likes.module.css";
import { LikeProps } from "./Likes.props";

export default function Like({ likes }: LikeProps): JSX.Element {
  return (
    <div className={styles["like-wrapper"]}>
      <span className={styles["time"]}>{likes}</span>
      <Image src="/like-icon.svg" alt="like-icon" width={16} height={16} />
    </div>
  );
}

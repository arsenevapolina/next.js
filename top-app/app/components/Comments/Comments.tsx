"use client";

import { MOCKSComment } from "@/app/mocks/comments";
import React from "react";
import { CommentsProps } from "./Comments.props";
import styles from "./Comments.module.css";

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const comment = MOCKSComment.find((c) => c.id === postId) || null;

  return (
    <div>
      <h2 className={styles.h2}>Комментарии</h2>
      {comment ? (
        <div key={comment.id}>
          <div className={styles.wrapper}>
            <div className={styles.name}>{comment.name}</div>
            <div>·</div>
            <div className={styles.email}>{comment.email}</div>
          </div>
          <div className={styles.text}>{comment.text}</div>
        </div>
      ) : (
        <p className={styles.text}>Комментариев нет</p>
      )}
    </div>
  );
};

export default Comments;

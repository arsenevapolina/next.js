"use client";

import { MOCKSComment } from "@/app/mocks/comments";
import React from "react";
import { CommentsProps } from "./Comments.props";
import styles from "./Comments.module.css";

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const comment = MOCKSComment.find((c) => c.id === postId) || null;

  return (
    <div>
      <h2 className={styles.h2} id="comments-section">
        Комментарии
      </h2>
      {comment ? (
        <div
          key={comment.id}
          role="article"
          aria-labelledby={`comment-${comment.id}`}
        >
          <div className={styles.wrapper} id={`comment-${comment.id}`}>
            <div className={styles.name}>{comment.name}</div>
            <div aria-hidden="true">·</div>
            <div className={styles.email}>{comment.email}</div>
          </div>
          <div
            className={styles.text}
            aria-describedby={`commentText-${comment.id}`}
          >
            {comment.text}
          </div>
        </div>
      ) : (
        <p className={styles.text} aria-live="polite" id="no-comments-message">
          Комментариев нет
        </p>
      )}
    </div>
  );
};

export default Comments;

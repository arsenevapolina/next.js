"use client";
import React from "react";
import Image from "next/image";
import styles from "./PageContent.module.css";
import ButtonLike from "@/app/components/LikeButton/LikeButton";
import LikesWrapper from "@/app/components/LikesWrapper/LikesWrapper";
import { PageContentProps } from "./PageContent.props";
import useLike from "@/app/hooks/useLike.hook";
import Comments from "@/app/components/Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

const PageContent: React.FC<PageContentProps> = ({ post }) => {
  const { currentLikes, handleLike } = useLike(post.id, post.likes || 0);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{post.h1}</h1>
      <div className={styles["wrapper-content"]}>
        <span className={styles.front}>Front-end</span>
        <span>·</span>
        <span className={styles.time}>1 месяц назад</span>
        <span>·</span>
        <span className={styles.time}>3 минуты</span>
        <span>·</span>
        <LikesWrapper likes={currentLikes} />
      </div>
      <Image
        src={post.img}
        alt={post.h1}
        layout="responsive"
        width={687}
        height={440}
      />
      <p className={styles.text}>{post.text}</p>
      <h2 className={styles.h2}>{post.h2}</h2>
      <p className={styles.text}>{post.p}</p>
      <div className={styles["button-wrapper"]}>
        <div className={styles.question}>Понравилось? Жми</div>
        <ButtonLike onChange={handleLike} />
      </div>
      <Comments postId={post.id} />
      <CommentForm />
    </div>
  );
};

export default PageContent;

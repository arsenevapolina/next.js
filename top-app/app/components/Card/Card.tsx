"use client";

import React, { JSX } from "react";
import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import LikesWrapper from "../LikesWrapper/LikesWrapper";
import ButtonLike from "../LikeButton/LikeButton";
import useLike from "@/app/hooks/useLike.hook";

export const Card = ({
  img,
  title,
  text,
  time,
  likes,
  postId,
}: CardProps): JSX.Element => {
  const { currentLikes, handleLike } = useLike(postId, likes);

  return (
    <div
      className={styles["card-wrapper"]}
      role="article"
      aria-labelledby={`title-${postId}`}
    >
      <div className={styles["img"]}>
        <Image
          src={img}
          alt={`Изображение поста: ${title}`}
          width={300}
          height={192}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["top-content"]}>
          <span className={styles["front"]}>Front-end</span>
          <span className={styles["point"]}>·</span>
          <span className={styles["time"]}>1 месяц назад</span>
        </div>
        <LikesWrapper likes={currentLikes} />
      </div>
      <h2 id={`title-${postId}`} className={styles["h2"]}>
        {title}
      </h2>
      <p className={styles["p"]}>
        <Link
          className={styles["link"]}
          href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Читать о ${text}`}
        >
          {text}
        </Link>
      </p>
      <div className={styles["card-bottom"]}>
        <span className={styles["time"]}>{time} минуты</span>
        <ButtonLike onChange={handleLike} aria-label="Нравится" />
        <div className={styles["read"]}>
          <Link href={`/posts/${postId}`} aria-label={`Читать пост ${title}`}>
            Читать
          </Link>
          <Image
            src="/arrow-icon.svg"
            alt="Стрелка, указывающая на чтение поста"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

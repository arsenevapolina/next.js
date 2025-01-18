import { JSX } from "react";
import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import Image from "next/image";
import Likes from "../Likes/Likes";
import Link from "next/link";

export const Card = ({
  img,
  title,
  text,
  time,
  likes,
}: CardProps): JSX.Element => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img"]}>
        <Image src={img} alt="like-icon" width={300} height={192} />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["top-content"]}>
          <span className={styles["front"]}>Front-end</span>
          <span className={styles["point"]}>·</span>
          <span className={styles["time"]}>1 месяц назад</span>
        </div>
        <Likes likes={likes} />
      </div>
      <div>
        <h2 className={styles["h2"]}>{title}</h2>
        <p className={styles["p"]}>
          <Link
            className={styles["link"]}
            href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </Link>
        </p>
      </div>
      <div className={styles["card-bottom"]}>
        <span className={styles["time"]}>{time} минуты</span>
        <div className={styles["read"]}>
          <Link href="#">Читать</Link>
          <Image
            src="/arrow-icon.svg"
            alt="arrow-icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

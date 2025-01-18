import { JSX } from "react";
import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import Image from "next/image";
import Likes from "../Likes/Likes";
import Link from "next/link";

export const Card = ({ likes }: CardProps): JSX.Element => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img-wrapper"]}>
        <Image
          src="/grid-img.png"
          alt="Описание иконки"
          width={300}
          height={192}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["wrapper"]}>
          <span className={styles["front"]}>Front-end</span>
          <span className={styles["point"]}>·</span>
          <span className={styles["time"]}>1 месяц назад</span>
        </div>
        <Likes likes={likes} />
      </div>
      <div>
        <h2 className={styles["h2"]}>Как работать с CSS Grid</h2>
        <p className={styles["p"]}>
          <Link
            className={styles["link"]}
            href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grid-раскладка (CSS Grid Layout)
          </Link>{" "}
          представляет собой двумерную систему сеток в CSS. Grid'ы подойдут и
          для верстки основных областей страницы.
        </p>
      </div>
      <div className={styles["card-bottom"]}>
        <span className={styles["time"]}>3 минуты</span>
        <div className={styles["like"]}>
          <Link href="#">Читать</Link>
          <Image src="/arrow.svg" alt="Иконка стрелки" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

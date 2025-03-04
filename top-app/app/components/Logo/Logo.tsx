import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label="Перейти на главную страницу"
    >
      .my_blog
    </Link>
  );
};

export default Logo;

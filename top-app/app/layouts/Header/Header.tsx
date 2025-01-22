import Logo from "@/app/components/Logo/Logo";
import styles from "./Header.module.css";
import GitHubIcon from "@/app/components/GitHubIcon/GitHubIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <GitHubIcon />
    </header>
  );
};

export default Header;

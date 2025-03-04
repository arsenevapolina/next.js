"use client";

import React from "react";
import Logo from "@/app/components/Logo/Logo";
import styles from "./Header.module.css";
import GitHubIcon from "@/app/components/GitHubIcon/GitHubIcon";
import { useGitHub } from "@/app/context/GitHubContext";

const Header = () => {
  const { githubLink } = useGitHub();

  return (
    <header className={styles.header}>
      <Logo />
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти на GitHub"
          className={styles.githubLink}
        >
          <GitHubIcon />
        </a>
      )}
    </header>
  );
};

export default Header;

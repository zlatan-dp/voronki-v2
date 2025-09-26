"use client";

import styles from "./Header.module.css";

import BackBtn from "../backBtn/backBtn";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const questionPattern = /question-\w+/;

  const isQuestionPage = questionPattern.test(pathname || "");

  const align = isQuestionPage ? "center" : "flex-start";
  const showBack = isQuestionPage;

  return (
    <header>
      <div
        className={`${styles.container} ${
          align === "center" ? styles.center : styles.left
        }`}
      >
        <p className={styles.logoText}>Logo</p>
        {showBack && <BackBtn />}
      </div>
    </header>
  );
}

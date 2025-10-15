"use client";

import styles from "./Header.module.css";

import BackBtn from "../backBtn/backBtn";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // const router = useRouter();
  // console.log(pathname);

  const questionPattern = /question-\w+/;

  const extraPages = [
    "/intensives/flow-01/terms-of-use",
    "/intensives/flow-01/privacy-policy",
    "/intensives/flow-01/subscription-terms",
  ];

  const isQuestionPage = questionPattern.test(pathname || "");
  const isExtraPage = extraPages.includes(pathname || "");

  const align = isQuestionPage || isExtraPage ? "center" : "flex-start";
  const showBack = isQuestionPage || isExtraPage;

  return (
    <header>
      <div
        className={`${styles.container} ${
          align === "center" ? styles.center : styles.left
        }`}
      >
        <p className={styles.logoText}>ChatMND</p>
        {showBack && <BackBtn />}
      </div>
    </header>
  );
}

"use client";

import styles from "./Header.module.css";

import BackBtn from "../backBtn/backBtn";

import { usePathname, useRouter } from "next/navigation";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

export default function Header() {
  const pathname = usePathname();
  const currentFlow = useCurrentFlow();
  // const router = useRouter();
  // console.log(pathname);

  const questionPattern = /question-\w+/;

  const extraPages = [
    `/sprints/${currentFlow}/terms-of-use`,
    `/sprints/${currentFlow}/privacy-policy`,
    `/sprints/${currentFlow}/subscription-terms`,
    `/sprints/${currentFlow}/cookie-policy`,
  ];

  const isQuestionPage = questionPattern.test(pathname || "");
  const isExtraPage = extraPages.includes(pathname || "");

  // const align = isQuestionPage || isExtraPage ? "center" : "flex-start";
  const align = "center";
  const showBack = isQuestionPage || isExtraPage;

  return (
    <header>
      <div
        className={`${styles.container} ${
          align === "center" ? styles.center : styles.left
        }`}
      >
        <p className={styles.logoText}>ChatMind</p>
        {showBack && <BackBtn />}
      </div>
    </header>
  );
}

"use client";

import styles from "./Header.module.css";

import BackBtn from "../backBtn/backBtn";

import { usePathname } from "next/navigation";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

export default function Header() {
  const pathname = usePathname();
  const currentFlow = useCurrentFlow();

  const extraPages = [
    `/firstday/${currentFlow}/terms-of-use`,
    `/firstday/${currentFlow}/privacy-policy`,
    `/firstday/${currentFlow}/subscription-terms`,
    `/firstday/${currentFlow}/cookie-policy`,
  ];

  const isExtraPage = extraPages.includes(pathname || "");

  const align = "center";
  const showBack = isExtraPage;

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

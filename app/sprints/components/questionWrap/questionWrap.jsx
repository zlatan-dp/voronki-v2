"use client";

import styles from "./questionWrap.module.css";

export default function QuestionWrap({ children, alignItems = "" }) {
  return (
    <div
      className={`${styles.questionWrap} ${
        alignItems === "center" ? styles.alignCenter : ""
      }`}
    >
      {children}
    </div>
  );
}

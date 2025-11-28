"use client";

import styles from "./questionWrap.module.css";

export default function QuestionWrap({ children }) {
  return <div className={styles.questionWrap}>{children}</div>;
}

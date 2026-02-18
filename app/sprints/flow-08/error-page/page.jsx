"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { useEffect, useState } from "react";

export default function errorPage() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const msg = sessionStorage.getItem("chatmnd-error-msg");
    if (msg) {
      setMessage(msg);
      setTimeout(() => sessionStorage.removeItem("chatmnd-error-msg"), 100);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">
            Sorry, something went wrong on our side.
          </SectionTitle>
          {message && <p className={styles.infoText}>{message}</p>}
          <p className={styles.infoText}>Please try again later.</p>
        </div>
      </div>
    </div>
  );
}

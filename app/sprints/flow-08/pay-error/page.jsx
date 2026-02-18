"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function payError() {
  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">Payment error.</SectionTitle>
          <p className={styles.infoText}>
            We’re having trouble processing your payment.
          </p>
          <p className={styles.infoText}>Please try again in a few minutes.</p>
        </div>
      </div>
    </div>
  );
}

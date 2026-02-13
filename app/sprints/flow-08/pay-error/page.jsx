"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function payError() {
  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">Pay ERROR.</SectionTitle>
          <p>Please try again later.</p>
        </div>
      </div>
    </div>
  );
}

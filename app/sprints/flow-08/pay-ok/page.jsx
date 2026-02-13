"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function payOk() {
  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">Pay OK.</SectionTitle>
          <p>okay</p>
        </div>
      </div>
    </div>
  );
}

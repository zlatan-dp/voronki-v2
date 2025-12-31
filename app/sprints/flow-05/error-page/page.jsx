"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function enterEmail() {
  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">
            Sorry, something went wrong on our side.
          </SectionTitle>
          <p>Please try again later.</p>
        </div>
      </div>
    </div>
  );
}

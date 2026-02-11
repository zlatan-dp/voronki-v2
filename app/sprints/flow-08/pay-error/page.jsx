"use client";

import styles from "./page.module.css";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
// import { useSearchParams } from "next/navigation";

export default function enterEmail() {
  // const params = useSearchParams();
  // const message = params.get("msg");
  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle ta="center">Pay ERROR.</SectionTitle>
          {/* {message && <p>{message}</p>} */}
          <p>Please try again later.</p>
        </div>
      </div>
    </div>
  );
}

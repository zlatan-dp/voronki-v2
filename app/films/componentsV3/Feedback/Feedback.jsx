"use client";

import styles from "./Feedback.module.css";
import Image from "next/image";
import SectionTitle from "../sectionTitle/sectionTitle";

import { FeedbackData } from "./FeedbackData";

export default function Feedback() {
  return (
    <div className={styles.feedbackContainer}>
      <SectionTitle align={"center"}>Kunden&shy;rezensionen</SectionTitle>
      <ul className={styles.feedbackList}>
        {FeedbackData.map(({ id, firstName, date, rating, text, img }) => (
          <li key={id} className={styles.feedbackWrap}>
            <div className={styles.clientWrap}>
              <div className={styles.imgWrap}>
                <Image src={img} alt="logo" width={98} height={98} />
              </div>
              <div>
                <p className={styles.name}>{firstName}</p>
                <p className={styles.date}>{date}</p>
                <div className={styles.rating}>
                  {Array.from({ length: rating }).map((_, index) => (
                    <span key={index} className={styles.star}></span>
                  ))}
                </div>
              </div>
            </div>

            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

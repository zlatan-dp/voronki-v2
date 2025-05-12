"use client";

import styles from "./Reliability.module.css";

import { ReliabilityData } from "./ReliabilityData";
import SectionTitle from "../sectionTitle/sectionTitle";
import Button from "../button/button";

export default function Realiability({ href }) {
  return (
    <div className={styles.container}>
      <SectionTitle>Die Folie schützt den Bildschirm vor</SectionTitle>
      <ul className={styles.list}>
        {ReliabilityData.map(({ id, img, title, text }) => (
          <li key={id} className={styles.realiabilityInfoItem}>
            <div
              className={styles.infoWrap}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className={styles.titleWrap}>
                <p className={styles.title}>{title}</p>
                <div className={styles.titleDecor}></div>
              </div>
              <p className={styles.text}>{text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button href={href} dataBlock={"Realiability section"}>
        Jetzt kaufen
      </Button>
    </div>
  );
}

import SectionTitle from "../sectionTitle/sectionTitle";
import SubmitBtn from "../submitBtn/SubmitBtn";
import styles from "./InfoPage.module.css";

import Image from "next/image";

export default function InfoPage({ data, next }) {
  return (
    <div className={styles.infoPageWrap}>
      <SectionTitle ta={"center"}>{data.title}</SectionTitle>
      <div className={styles.imageWrap}>
        <Image
          src={`/images/firstday/flow-01/${data.image}`}
          alt="image"
          width={260}
          height={260}
          quality={100}
        />
      </div>
      <p className={styles.infoText}>{data.text}</p>
      <SubmitBtn wide={"wide"} onClick={() => next()}>
        {data.buttonText}
      </SubmitBtn>
    </div>
  );
}

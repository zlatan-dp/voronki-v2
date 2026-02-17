import SectionTitle from "../sectionTitle/sectionTitle";
import SubmitBtn from "../submitBtn/SubmitBtn";
import styles from "./InfoPage.module.css";

import Image from "next/image";

export default function InfoPage({ data, next, lastAnswerId }) {
  const dataToShow = data.variants?.[lastAnswerId] || data;

  return (
    <div className={styles.infoPageWrap}>
      <SectionTitle ta={"center"}>{dataToShow.title}</SectionTitle>
      <div className={styles.imageWrap}>
        <Image
          src={`/images/firstday/flow-01/${dataToShow.image}`}
          alt="image"
          width={260}
          height={260}
          quality={100}
        />
      </div>
      <p className={styles.infoText}>{dataToShow.text}</p>
      <SubmitBtn wide={"wide"} onClick={() => next()}>
        {dataToShow.buttonText}
      </SubmitBtn>
    </div>
  );
}

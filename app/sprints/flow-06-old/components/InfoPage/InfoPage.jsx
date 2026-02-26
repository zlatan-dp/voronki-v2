import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";
import styles from "./InfoPage.module.css";

import Image from "next/image";

export default function InfoPage({ title, image, text, next }) {
  return (
    <div className={styles.infoPageWrap}>
      <SectionTitle ta={"center"}>{title}</SectionTitle>
      <div className={styles.imageWrap}>
        <Image
          src={`/images/sprints/flow-06/${image}`}
          alt="author"
          width={260}
          height={260}
          quality={100}
        />
      </div>
      <p className={styles.infoText}>{text}</p>
      <SubmitBtn wide={"wide"} onClick={next}>
        Continue
      </SubmitBtn>
    </div>
  );
}

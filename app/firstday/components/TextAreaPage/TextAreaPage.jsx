import { useState } from "react";
import SectionTitle from "../sectionTitle/sectionTitle";
import SubmitBtn from "../submitBtn/SubmitBtn";
import styles from "./TextAreaPage.module.css";

export default function TextAreaPage({ data, next }) {
  const [answer, setAnswer] = useState("");
  // console.log(answer);

  const handleClick = () => {
    next(answer);
    setAnswer("");
  };

  const btnDisabled = answer.trim().length < 5;

  return (
    <div className={styles.textAreaPageWrap}>
      <SectionTitle ta={"center"}>{data.title}</SectionTitle>
      <p className={styles.infoText}>{data.step}</p>
      <div className={styles.infoTextWrap}>
        <p className={styles.infoText}>{data.text}</p>
        {data.secondaryText && (
          <p className={styles.secondaryText}>{data.secondaryText}</p>
        )}
      </div>
      <textarea
        name="answer"
        placeholder={data.placeholder || "Enter your answer here"}
        className={styles.textarea}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>

      {data.afterText && <p className={styles.infoText}>{data.afterText}</p>}
      <SubmitBtn disabled={btnDisabled} wide={"wide"} onClick={handleClick}>
        {data.buttonText}
      </SubmitBtn>
    </div>
  );
}

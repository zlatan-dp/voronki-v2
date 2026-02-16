import styles from "./QuestionPage.module.css";

import TextAnswerContainer from "../../components/TextAnswerContainer/TextAnswerContainer";
import SectionTitle from "../sectionTitle/sectionTitle";

export default function QuestionPage({ data, next }) {
  return (
    <div className={styles.questionPageWrap}>
      <SectionTitle ta={"center"}>{data.title}</SectionTitle>
      <p className={styles.questionText}>{data.text}</p>
      <ul className={styles.answerList}>
        {data.answers.map(({ id, answer }) => (
          <li key={id} onClick={() => next(answer)}>
            <TextAnswerContainer text={answer} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import styles from "./TextAnswerContainer.module.css";

export default function TextAnswerContainer({ text }) {
  return (
    <div className={styles.inputWrap}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

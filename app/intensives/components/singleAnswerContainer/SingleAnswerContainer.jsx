import styles from "./SingleAnswerContainer.module.css";

export default function SingleAnswerContainer({ img, text, description }) {
  return (
    <div className={styles.inputWrap}>
      <div className={styles.mainText}>
        {img && <span className={styles.emoji}>{img}</span>}
        <span className={styles.text}>{text}</span>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}

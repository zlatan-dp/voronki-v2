import styles from "./TextAnswerContainer.module.css";

export default function TextAnswerContainer({ text }) {
  return (
    <div className={styles.inputWrap}>
      <div className={styles.mainText}>
        <span className={styles.text}>{text}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.answerIcon}
        >
          <path
            d="M7.49707 14.994L12.4951 9.99603L7.49707 4.99805"
            stroke="#99A1AF"
            strokeWidth="1.66599"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({ children, disabled, onClick }) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

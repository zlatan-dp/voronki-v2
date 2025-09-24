import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({
  children,
  disabled,
  onClick,
  submit = "button",
}) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type={submit}
    >
      {children}
    </button>
  );
}

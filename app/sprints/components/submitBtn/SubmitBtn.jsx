import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({
  children,
  disabled,
  onClick,
  submit = "button",
  color = "",
  wide = "",
}) {
  return (
    <button
      className={`${styles.button} ${color === "white" && styles.whiteBtn} ${
        wide === "wide" && styles.wideBtn
      }`}
      disabled={disabled}
      onClick={onClick}
      type={submit}
    >
      {children}
    </button>
  );
}

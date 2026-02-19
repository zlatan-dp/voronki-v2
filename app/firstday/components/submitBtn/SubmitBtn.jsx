import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({
  children,
  disabled,
  onClick,
  submit = "button",
  color = "",
  wide = "",
  mTop = "",
  id,
}) {
  return (
    <button
      id={id}
      className={`${styles.button} ${
        color === "white" ? styles.whiteBtn : ""
      } ${wide === "wide" ? styles.wideBtn : ""} ${mTop === "auto" ? styles.mTop : ""}`}
      disabled={disabled}
      onClick={onClick}
      type={submit}
    >
      {children}
    </button>
  );
}

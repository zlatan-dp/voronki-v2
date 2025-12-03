import styles from "./blockWrap.module.css";

export default function BlockWrap({ children, bg = "", padding = "" }) {
  return (
    <div
      className={`${styles.blockWrap} ${bg === "green" ? styles.bgGreen : ""} ${
        padding === "big" ? styles.bigPadding : ""
      }`}
    >
      {children}
    </div>
  );
}

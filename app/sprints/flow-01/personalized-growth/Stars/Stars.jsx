import styles from "./Stars.module.css";

export default function Stars({ percent }) {
  const starsText = "★★★★★"; // 5 зірок
  return (
    <span className={styles.root} style={{ ["--fill"]: `${percent}%` }}>
      <span className={styles.base}>{starsText}</span>
      <span className={styles.fill}>{starsText}</span>
    </span>
  );
}

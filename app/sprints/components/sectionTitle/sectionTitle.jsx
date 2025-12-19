import styles from "./sectionTitle.module.css";

export default function SectionTitle({ children, ta = "" }) {
  return (
    <h2 className={`${styles.title} ${ta === "center" ? styles.center : ""}`}>
      {children}
    </h2>
  );
}

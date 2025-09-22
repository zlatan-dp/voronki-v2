import styles from "./sectionTitle.module.css";

export default function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

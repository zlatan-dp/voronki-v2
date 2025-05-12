import classNames from "classnames";
import styles from "./sectionTitle.module.css";

export default function SectionTitle({ children, variant = "blue" }) {
  return (
    <h2 className={classNames(styles.title, styles[variant])}>{children}</h2>
  );
}

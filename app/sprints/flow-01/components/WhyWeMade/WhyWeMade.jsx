import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import styles from "./WhyWeMade.module.css";

export default function WhyWeMade() {
  return (
    <BlockWrap bg={"green"} padding={"big"}>
      <SectionTitle>Thats Why We Made ChatMND</SectionTitle>
      <p className={styles.text}>
        We took the <span className={styles.bold}>most impactful ideas</span>—
        from these books and turned them into{" "}
        <span className={styles.bold}>practical sprints</span> — just 7
        minutes/day, in a messenger-friendly format.
      </p>
      <p className={styles.text}>
        <span className={styles.bold}>
          The fastest way to turn great ideas into lasting behavior.
        </span>
      </p>
    </BlockWrap>
  );
}

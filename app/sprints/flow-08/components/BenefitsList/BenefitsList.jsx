import styles from "./BenefitsList.module.css";

import { BenefitsData } from "./BenefitsData";
import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

export default function BenefitsList() {
  return (
    <BlockWrap padding={"big"}>
      <SectionTitle>What You’ll Get — and How It Works</SectionTitle>
      <ul className={styles.benefitsList}>
        {BenefitsData.map(({ id, text }) => (
          <li className={styles.benefitsItem} key={id}>
            <p className={styles.benefitsText}>{text}</p>
          </li>
        ))}
      </ul>
      <p className={styles.benefitsComment}>
        <span className={styles.bold}>ChatMind App </span>
        guide you from knowing the steps to{" "}
        <span className={styles.bold}>
          building a routine that feels manageable every day.
        </span>
      </p>
    </BlockWrap>
  );
}

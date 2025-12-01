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
        In ~ 1 month, <span className={styles.bold}>5 sprints </span>= the
        practical equivalent of 5 books — but with{" "}
        <span className={styles.bold}>real habits,</span> not just information.
      </p>
    </BlockWrap>
  );
}

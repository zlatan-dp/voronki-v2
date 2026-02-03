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
      <p className={styles.actionText}>
        First changes visible in 72&nbsp;hours!!!
      </p>
    </BlockWrap>
  );
}

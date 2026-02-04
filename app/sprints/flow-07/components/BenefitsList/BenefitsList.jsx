import styles from "./BenefitsList.module.css";

import { BenefitsData } from "./BenefitsData";
import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

export default function BenefitsList({ branch = "universal" }) {
  const titles = {
    focus: "Built to protect focus and reduce distractions",
    habits: "Built to help routines stick — even on busy days",
    stress: "Built to help you unwind and quiet mental noise",
    shape: "Built for steady progress — without extremes",
    universal: "Built as a balanced stack — without overwhelm",
  };
  const currentTitle = titles[branch];

  const filteredBenefitsData = BenefitsData.filter(
    (item) => item.forBranch === branch,
  );
  return (
    <BlockWrap padding={"small"}>
      <SectionTitle>{currentTitle}</SectionTitle>
      <ul className={styles.benefitsList}>
        {filteredBenefitsData.map(({ id, text }) => (
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

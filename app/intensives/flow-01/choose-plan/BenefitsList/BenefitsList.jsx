import styles from "./BenefitsList.module.css";

import { BenefitsData } from "./BenefitsData";

export default function BenefitsList() {
  return (
    <ul className={styles.benefitsList}>
      {BenefitsData.map(({ id, text }) => (
        <li className={styles.benefitsItem} key={id}>
          {text}
        </li>
      ))}
    </ul>
  );
}

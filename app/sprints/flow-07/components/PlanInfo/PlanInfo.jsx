"use client";

import styles from "./PlanInfo.module.css";

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

export default function PlanInfo() {
  return (
    <BlockWrap padding={"small"}>
      <SectionTitle ta={"center"}>
        One bundle. One plan. Less juggling.
      </SectionTitle>
      <div className={styles.textWrap}>
        <p className={styles.text}>
          • Better value than subscribing to each app separately
        </p>
        <p className={styles.text}>
          • Premium access to 3 services – no separate payments
        </p>
        <p className={styles.text}>• One place to manage your subscriptions</p>
        <p className={styles.text}>
          • Timely reminders and quick check-ins to keep momentum
        </p>
        <p className={styles.text}>
          • Clear next steps – so you don’t have to overthink what to do today
        </p>
        <p className={styles.text}>
          • Your plan adjusts as you go based on your progress
        </p>
      </div>
    </BlockWrap>
  );
}

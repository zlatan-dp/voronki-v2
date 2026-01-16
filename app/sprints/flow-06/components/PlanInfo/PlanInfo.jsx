"use client";

import styles from "./PlanInfo.module.css";

import BlockWrap from "../../../components/blockWrap/blockWrap";

// import { getFlowBranch } from "../../../actions/quizStorage";
import { useCurrentFlow } from "../../../actions/getCurrentFlow";
// import { useEffect, useState } from "react";

export default function PlanInfo() {
  const currentFlow = useCurrentFlow();
  // const [branch, setBranch] = useState(null);

  // useEffect(() => {
  //   setBranch(getFlowBranch(currentFlow));
  // }, [currentFlow]);

  return (
    <BlockWrap padding={"small"}>
      {/* {branch && (
        <p className={styles.text}>
          {branch === "myself" && "Includes your PERSONALIZED plan:"}
          {branch === "loved-one" &&
            "Includes your loved one’s PERSONALIZED plan:"}
        </p>
      )} */}
      <p className={styles.boldSmallText}>
        With ChatMind subscription you'll get:
      </p>
      <div className={styles.textWrap}>
        <p className={styles.text}>• Personalized 7–30 day recovery plan</p>
        <p className={styles.text}>
          • Daily reminders and prompts at the perfect moment
        </p>
        <p className={styles.text}>
          • Practices for sleep, calming, and "day reset"
        </p>
        <p className={styles.text}>
          • Live program updates based on your progress
        </p>
      </div>
      {/* <div className={styles.textWrap}>
        <p className={styles.text}>• Complete daily schedule (7-21 days)</p>
        <p className={styles.text}>• Audio-guided recovery rituals</p>
        <p className={styles.text}>• Progress tracking + adjustments</p>
        <p className={styles.text}>• Weekly energy boost challenges</p>
      </div> */}

      <p className={styles.actionText}>
        First changes visible in 72&nbsp;hours!!!
      </p>
    </BlockWrap>
  );
}

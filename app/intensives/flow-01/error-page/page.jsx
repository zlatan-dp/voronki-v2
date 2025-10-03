"use client";

import styles from "./page.module.css";

// import { useRouter } from "next/navigation";

// import { useCurrentFlow } from "../../actions/getCurrentFlow";
// import { nextStep } from "../../../actions/steps-client.action";
// import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function enterEmail() {
  //   const currentFlow = useCurrentFlow();
  //   const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>Sorry, something went wrong on our side.</SectionTitle>
          <p>Please try again later.</p>
        </div>
      </div>
    </div>
  );
}

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import ChoosePlanComponent from "../ChoosePlan/ChoosePlan";
import styles from "./PersonalizedGrowth.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

export default function PersonalizedGrowth() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 80,
      type: "info",
      question: "from paywall",
      answer: "to booklist",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/booklist`);
  };
  return (
    <BlockWrap>
      <SectionTitle>Your Personalized Growth Plan Starts Here</SectionTitle>
      <div className={styles.reachGoalsWrap}>
        <div className={styles.reachGoalsLeft}>
          <div className={styles.reachGoalsTextWrap}>
            <p className={styles.reachGoalsTextPercent}>16%</p>
            <p className={styles.reachGoalsText}>reach</p>
            <p className={styles.reachGoalsText}>goals</p>
          </div>
          <p className={styles.reachGoalsTitlle}>On your own</p>
        </div>
        <div className={styles.reachGoalsRight}>
          <div className={styles.reachGoalsTextWrap}>
            <p className={styles.reachGoalsTextPercent}>78%</p>
            <p className={styles.reachGoalsText}>reach</p>
            <p className={styles.reachGoalsText}>goals</p>
          </div>
          <p className={styles.reachGoalsTitlle}>With ChatMind</p>
        </div>
      </div>
      <p className={styles.text}>
        We have selected <span className={styles.bold}>5 books</span> that are{" "}
        <span className={styles.bold}>most recommended</span> for you based on
        your responses. You can read them on your own or absorb the material
        much more effectively with ChatMind App
      </p>
      <ChoosePlanComponent page={"choose plan from paywall"} step={80} />
      <p className={styles.actionText}>
        You can cancel your
        <br /> subscription at any time
      </p>
      <p className={styles.linkText} onClick={goToNextStep}>
        Your 5-book set ➤
      </p>
    </BlockWrap>
  );
}

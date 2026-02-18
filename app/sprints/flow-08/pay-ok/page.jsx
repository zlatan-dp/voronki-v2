"use client";

import styles from "./page.module.css";

import Image from "next/image";

import { useUser } from "../../actions/userContext";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";
import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { useRouter } from "next/navigation";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/container";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function payOk() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();
  const { userEmail } = useUser();

  const goToNextStep = async () => {
    await nextStep({
      step: 20,
      type: "info",
      question: "Payment successful!",
      answer: "next",
      time: await getCurrentTime(),
    });

    localStorage.removeItem("ChatMindSprint:email");

    router.push(`/sprints/${currentFlow}/instruction`);
  };

  return (
    <Container>
      <div className={styles.infoPageWrap}>
        <SectionTitle ta="center">Payment successful!</SectionTitle>
        <div className={styles.imageWrap}>
          {" "}
          <Image
            src={`/images/sprints/great-job.png`}
            alt="author"
            width={277}
            height={287}
            quality={100}
          />
        </div>

        <div className={styles.infoTextWrap}>
          <p className={styles.infoText}>What to do next</p>
          <p className={styles.infoText}>
            1. Download and install the ChatMind app on your phone.
          </p>
          <p className={styles.infoText}>
            2. Sign in with your email{" "}
            {userEmail && <span className={styles.accented}>{userEmail}</span>}
          </p>
          <p className={styles.secondaryText}>
            (Please use the same email you used to create your account)
          </p>
          <p className={styles.infoText}>
            3. Start practicing your daily skills.
          </p>
        </div>
        <SubmitBtn wide={"wide"} onClick={goToNextStep}>
          Install app guide
        </SubmitBtn>
      </div>
    </Container>
  );
}

"use client";

import styles from "./page.module.css";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question01() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 1,
      type: "info",
      answer: "social-proof",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-10`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={0} to={4} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <SectionTitle>
            <span className={styles.accent}>50+ million people</span>
          </SectionTitle>
          <p className="centeredText">
            are already discovering a smarter way to learn. ChatMND turns
            micro-moments into growth moments — simple, structured, and
            science-backed.
          </p>
          <div className={styles.quoteWrap}>
            <div className={styles.quoteIcon}>
              <Image
                src="/images/intensives/q01/quota.svg"
                alt="quote"
                width={12}
                height={12}
              />
            </div>

            <p className={styles.quoteText}>
              Microlearning is the future of professional development.
            </p>
            <div className={styles.authorIcon}>
              <Image
                src="/images/intensives/q01/img-forbes.svg"
                alt="author"
                width={101}
                height={21}
              />
            </div>
          </div>
          <div className={styles.quoteWrap}>
            <div className={styles.quoteIcon}>
              <Image
                src="/images/intensives/q01/quota.svg"
                alt="quote"
                width={12}
                height={12}
              />
            </div>

            <p className={styles.quoteText}>
              13 investors say lifelong learning is taking edtech mainstream.
            </p>
            <div className={styles.authorIcon}>
              <Image
                src="/images/intensives/q01/img-tech.svg"
                alt="author"
                width={101}
                height={21}
              />
            </div>
          </div>
        </div>
        <p className={styles.keepText}>
          Designed to keep your curiosity alive, one short lesson at a time.
        </p>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

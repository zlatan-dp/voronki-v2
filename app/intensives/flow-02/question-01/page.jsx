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

export default function question10() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 1,
      type: "info",
      answer: answer || "next",
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
          <p>already use the ChatMND</p>
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
              Headway is a bite-sized learning app for those who strive to grow
            </p>
            <div className={styles.authorIcon}>
              <Image
                src="/images/intensives/q01/img-01.svg"
                alt="author"
                width={101}
                height={21}
              />
            </div>
          </div>
          <p className={styles.upperText}>Mentioned in</p>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q01/img-02.svg"
              alt="author"
              width={326}
              height={130}
            />
          </div>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

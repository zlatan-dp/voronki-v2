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

export default function question41() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 41,
      type: "info",
      answer: "Finishing what you start is just a skill —",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-50`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={25} to={28} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q41/img1.png"
              alt="img"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>
            Finishing what you start is just a skill —{" "}
          </SectionTitle>
          <p className="centeredText">
            and we’ll master it together, learning how to gently inspire the
            same in others.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

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

export default function question81() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 81,
      type: "info",
      answer: "It’s okay",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-90`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={54} to={56} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q81/img.svg"
              alt="img"
              width={296}
              height={192}
            />
          </div>
          <SectionTitle>
            It’s okay to doubt your skills if you make a mistake
          </SectionTitle>
          <p>
            Mistakes are unavoidable when you're trying to achieve something
            meaningful. What's important here is the right attitude, so your
            recommendations will also target this, too.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

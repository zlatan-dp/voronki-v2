"use client";

import styles from "./page.module.css";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function question03() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    const firstAnswer = +localStorage.getItem("ChatMNDhowYouWantToLearn");

    await nextStep({
      step: 3,
      type: "info",
      answer: "next",
      time: await getCurrentTime(),
    });

    if (firstAnswer === 1) {
      router.push(`/intensives/${currentFlow}/error-page`);
    }

    if (firstAnswer === 2) {
      router.push(`/intensives/${currentFlow}/question-08`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q11/img.png"
              alt="author"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>Wonderful choice!</SectionTitle>
          <p>You can always change the way you learn.</p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

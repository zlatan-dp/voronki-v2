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
    await nextStep({
      step: 3,
      type: "info",
      answer: "telegram",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/error-page`);
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
          <SectionTitle>Instruction for telegram</SectionTitle>
          <ol className={styles.instructionList}>
            <li>Do this</li>
            <li>Do this</li>
            <li>Do this</li>
            <li>Do this</li>
          </ol>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}

import Image from "next/image";

import { useRouter } from "next/navigation";
import { getCurrentTime } from "../../actions/saveToStorage";
import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";

import styles from "./Video.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import Button from "../button/button";

export default function VideoSection({ href }) {
  const router = useRouter();
  const currentFlow = useCurrentFlow();

  const goToNextStep = async () => {
    await nextStep({
      step: 1,
      type: "info",
      question: "click video",
      answer: "next",
      time: await getCurrentTime(),
    });
    router.push(`/films/${currentFlow}/ups-video`);
  };

  return (
    <div className={styles.container}>
      <SectionTitle variant={"gray"}>Videoanleitung</SectionTitle>
      <div className={styles.videoWrap} onClick={goToNextStep}>
        <Image
          src="/images/filmsV3/06_video.png"
          alt="video image"
          width={320}
          height={181}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <p className={styles.text}>
        Schauen Sie sich die
        <br /> Videoanleitung zur Anbringung
        <br /> der Folie an!
      </p>
      <Button href={href} dataBlock={"Video section"}>
        Jetzt kaufen
      </Button>
    </div>
  );
}

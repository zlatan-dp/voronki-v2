"use client";

import { useCurrentFlow } from "../actions/getCurrentFlow";

import LandingWrap from "../componentsV2/LandingWrap/LandingWrap";
import Header from "../componentsV2/Header/Header";
import DiscountSection from "../componentsV2/Discount/Discount";
import EasyInstallSection from "../componentsV2/EasyInstall/EasyInstall";
import VideoSection from "../componentsV2/Video/Video";
import Protective from "../componentsV2//Protective/Protective";
import FilmsInfo from "../componentsV2/FilmsInfo/FilmsInfo";
import Realiability from "../componentsV2/Reliability/Reliability";
import Faq from "../componentsV2/Faq/Faq";
import Feedback from "../componentsV2/Feedback/Feedback";
import Explanation from "../componentsV2/Explanation/Explanation";
import ScrollToTop from "../componentsV2/upBtn/upBtn";

// import { getStoredAnswers } from "../actions/saveToStorage";

export default function filmsLanding() {
  const currentFlow = useCurrentFlow();
  // console.log(currentFlow);
  // console.log(getStoredAnswers());

  return (
    <>
      <Header />
      <LandingWrap>
        <DiscountSection href={`/films/${currentFlow}/choose-film`} />
        <EasyInstallSection href={`/films/${currentFlow}/choose-film`} />
        <VideoSection href={`/films/${currentFlow}/choose-film`} />
        <Protective href={`/films/${currentFlow}/choose-film`} />
        <FilmsInfo href={`/films/${currentFlow}/choose-film`} />
        <Realiability href={`/films/${currentFlow}/choose-film`} />
        <Faq href={`/films/${currentFlow}/choose-film`} />
        <Feedback />
        <Explanation
          href={`/films/${currentFlow}/choose-film`}
          flow={`films/${currentFlow}`}
        />
      </LandingWrap>
      <ScrollToTop />
    </>
  );
}

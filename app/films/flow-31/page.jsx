"use client";

import { useCurrentFlow } from "../actions/getCurrentFlow";

import LandingWrap from "../componentsV3/LandingWrap/LandingWrap";
import HeroSection from "../componentsV3/HeroSection/HeroSection";
import DiscountSection from "../componentsV3/Discount/Discount";
import Realiability from "../componentsV3/Reliability/Reliability";

import FilmsInfo from "../componentsV3/FilmsInfo/FilmsInfo";
import EasyInstallSection from "../componentsV3/EasyInstall/EasyInstall";
import VideoSection from "../componentsV3/Video/Video";
import Protective from "../componentsV3//Protective/Protective";
import Faq from "../componentsV3/Faq/Faq";
import Feedback from "../componentsV3/Feedback/Feedback";
import Explanation from "../componentsV3/Explanation/Explanation";
import ScrollToTop from "../componentsV3/upBtn/upBtn";

// import { getStoredAnswers } from "../actions/saveToStorage";

export default function filmsLanding() {
  const currentFlow = useCurrentFlow();
  // console.log(currentFlow);
  // console.log(getStoredAnswers());

  return (
    <>
      <LandingWrap>
        <HeroSection href={`/films/${currentFlow}/choose-film`} />
        <DiscountSection href={`/films/${currentFlow}/choose-film`} />
        <Realiability href={`/films/${currentFlow}/choose-film`} />

        <FilmsInfo href={`/films/${currentFlow}/choose-film`} />

        <EasyInstallSection href={`/films/${currentFlow}/choose-film`} />
        <VideoSection href={`/films/${currentFlow}/choose-film`} />
        <Protective href={`/films/${currentFlow}/choose-film`} />
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

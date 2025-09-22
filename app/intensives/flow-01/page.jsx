"use client";

import { useCurrentFlow } from "../actions/getCurrentFlow";

import LandingWrap from "../components/LandingWrap/LandingWrap";
import Header from "../components/Header/Header";

export default function filmsLanding() {
  const currentFlow = useCurrentFlow();
  console.log(currentFlow);

  return (
    <>
      <LandingWrap>
        <Header />
        <div>param pam</div>
        {/* <HeroSection href={`/films/${currentFlow}/choose-film`} /> */}
      </LandingWrap>
    </>
  );
}

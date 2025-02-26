'use client'

import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import FilmsInfo from "../components/FilmsInfo/FilmsInfo"
import Protective from "../components/Protective/Protective"
import Realiability from "../components/Reliability/Reliability"
import AdvantageSection from "../components/Advantage/Advantage"
import Faq from "../components/Faq/Faq"
import Feedback from "../components/Feedback/Feedback"
import Explanation from "../components/Explanation/Explanation"
import ScrollToTop from "../components/upBtn/upBtn"
import LandingWrap from "../components/LandingWrap/LandingWrap"


import { getStoredAnswers } from "../actions/saveToStorage"

export default function filmsLanding() {
    
    console.log(getStoredAnswers());
    
    return (
        <>
            <Header />
            <LandingWrap>
                <HeroSection href={'/flow-03/choose-film'}/>
                <FilmsInfo />
                <Protective href={'/flow-03/choose-film'}/>
                <Realiability />
                <AdvantageSection 
                    title={'DU SCHÄTZT HOCHWERTIGE TECHNIK?'}
                    bgImage={"/images/advantage_bg_5.png"}
                    href={'/flow-03/choose-film'}/>
                <AdvantageSection 
                    title={<>Fieberst du<br /> voll mit?!</>}
                    bgImage={"/images/advantage_bg_6.png"}
                    href={'/flow-03/choose-film'}/>
                <AdvantageSection 
                    title={'DU HAST VERSPIELTE HAUSTIERE?'}
                    bgImage={"/images/advantage_bg_2.png"}
                    href={'/flow-03/choose-film'}/>
                <AdvantageSection 
                    title={'DU BIST EIN AKTIVER GAMER?'}
                    bgImage={"/images/advantage_bg_3.png"}
                    href={'/flow-03/choose-film'}/>
                <AdvantageSection 
                    title={<>DU BIST<br /> GESCHÄFTS&shy;INHABER?</>}
                    bgImage={"/images/advantage_bg_4.png"}
                    href={'/flow-03/choose-film'}/>
                <AdvantageSection 
                    title={<>DEINE KINDER<br /> SPIELEN AKTIV?</>}
                    bgImage={"/images/advantage_bg_1.png"}
                    href={'/flow-03/choose-film'}/>
                <Faq />
                <Feedback />
                <Explanation href={'/flow-03/choose-film'} flow={'flow-03'}/>
            </LandingWrap>
            <ScrollToTop />
        </>
    )
}
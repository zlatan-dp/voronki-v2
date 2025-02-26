import Image from "next/image";
import pagePic from "@/app/static/img/image KIVI Quiz KidsTV/4.png";

export default function CloseToEyes () {
  return(
    <>
      <Image
          className={'step-four-img'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
      />
      {/*<div className="step-four-spacer"></div>*/}
      <h1>Ekran jest zbyt blisko oczu</h1>

      <div className="info-block" >
      Ekran, znajdujący się bliżej 30 cm od oczu dziecka, powoduje 
      długotrwałe zmęczenie oczu z powodu ciągłego skupiania wzroku. 
      Zwiększa to ryzyko rozwoju krótkowzroczności o 50-60%.
      </div>
    </>
  )
}
import Image from "next/image";
import pagePic from "@/app/static/img/79466882_1.png";

export default function InTheDark() {
  return (
    <>
      <Image
        className={'step-four-img3'}
        src={pagePic}
        alt="KIVI fourth step"
        priority={true}
      />
      <div className="step-four-spacer3"></div>
      <h1>Oglądanie treści w ciemności</h1>

      <div className="info-block" >
        Ekran w ciemności zwiększa obciążenie oczu z powodu kontrastu
        jasnego ekranu i ciemnego otoczenia. Częste korzystanie
        z gadżetów w takich warunkach powoduje bóle głowy i
        pogorszenie wzroku u 25-30% dzieci.
      </div>
    </>
  )
}
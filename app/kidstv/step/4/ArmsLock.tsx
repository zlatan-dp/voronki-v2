import Image from "next/image";
import pagePic from "@/app/static/img/ani_cartoon_23.png";

export default function ArmsLock() {
  return (
    <>
      <Image
        className={'step-four-img2'}
        src={pagePic}
        alt="KIVI fourth step"
        priority={true}
      />
      <div className="step-four-spacer"></div>
      <h1>Zwiększone obciążenie nadgarstków i rąk</h1>

      <div className="info-block" >
        Kiedy dziecko długo trzyma gadżet w rękach, dochodzi do przeciążenia
        mięśni dłoni i nadgarstków. Zwiększa to ryzyko wystąpienia zespołu
        cieśni nadgarstka (ucisk nerwu w okolicy nadgarstka) o 15%.
      </div>
    </>
  )
}
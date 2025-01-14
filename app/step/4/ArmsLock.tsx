import Image from "next/image";
import pagePic from "@/app/static/img/ani_cartoon_23.png";

export default function ArmsLock () {
  return(
    <>
      <Image
          className={'step-four-img2'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
      />
      <div className="step-four-spacer"></div>
      <h1>Повышенная нагрузка на запястья и руки</h1>

      <div className="info-block" >
        Длительное удерживание гаджета в руках приводит к перенапряжению
        мышц кистей и запястий и <span>на 15%</span> увеличивает риск развития
        у ребенка туннельного синдрома
      </div>
    </>
  )
}
import Image from "next/image";
import pagePic from "@/app/static/img/ani_cartoon_22.png";

export default function CloseToEyes () {
  return(
    <>
      <Image
          className={'step-four-img'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
      />
      <div className="step-four-spacer"></div>
      <h1>Экран слишком близко к глазам</h1>

      <div className="info-block" >
        Использование экрана на расстоянии менее 30 см от глаз
        увеличивает риск миопии <span>на 50-60%</span> и вызывает спазм аккомодации,
        что может привести к необратимым изменениям зрения
      </div>
    </>
  )
}
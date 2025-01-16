import Image from "next/image";
import pagePic from "@/app/static/img/79466882_1.png";

export default function InTheDark () {
  return(
    <>
      <Image
          className={'step-four-img3'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
      />
      <div className="step-four-spacer3"></div>
      <h1>Просмотр контента в темноте</h1>

      <div className="info-block" >
      Просмотр экрана в темноте увеличивает нагрузку на глаза и повышает риск 
      зрительного перенапряжения. Это вызывает головные боли и снижение зрения <br/>
      у <span>25-30%</span> детей, регулярно использующих гаджеты в таких условиях
      </div>
    </>
  )
}
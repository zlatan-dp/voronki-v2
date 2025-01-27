import Image from "next/image";
import pagePic from "@/app/static/img/ani_cartoon_28.png";

export default function CrookedBack () {
  return(
    <>
      <Image
          className={'step-four-img4'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
      />
      <div className="step-four-spacer3"></div>
      <h1>Zła postawa dziecka</h1>

      <div className="info-block" >
      Długotrwałe korzystanie z gadżetów w niewygodnej pozycji prowadzi 
      do garbienia i deformacji kręgosłupa. Jest to szczególnie szkodliwe 
      dla dzieci, u których przy regularnej niewłaściwej postawie 
      rozwija się skolioza w 20-30% przypadków.
      </div>
    </>
  )
}
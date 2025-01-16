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
      <h1>Проблемы с осанкой у ребенка</h1>

      <div className="info-block" >
      Длительное использование гаджетов в неудобной позе приводит к сутулости 
      и искривлению позвоночника, что особенно опасно для детей, у которых 
      сколиоз может развиваться в <span>20-30%</span> случаев при регулярном нахождении 
      в неправильной осанке
      </div>
    </>
  )
}
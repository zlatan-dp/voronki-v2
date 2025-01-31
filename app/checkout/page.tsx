"use client"

import './styles.checkout.css'
import {useState} from "react";
import kidsTVWithFrames from "@/app/static/img/checkout/KidsTV_plus_Frames.png";
import kidsTV from "@/app/static/img/checkout/Front32KidsTV.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {StepType} from "@/app/actions/actions.types";
import {stepsAction} from "@/app/actions/steps.action";

export default function CheckoutPage() {

  const products = [
    {
      id: 1,
      price: '1000 Zł',
      title: 'Telewizor',
      model: 'KIVI KidsTV',
      subTitle: '+ + zestaw akcesoriów',
      subTitleModel: 'Color Frames',
      image: kidsTVWithFrames,
      alt: "KIVI KidsTV with Frames",
    },
    {
      id: 2,
      price: '869 Zł',
      title: 'Telewizor',
      model: 'KIVI KidsTV',
      subTitle: '',
      subTitleModel: '',
      image: kidsTV,
      alt: "KIVI KidsTV without Frames"
    }
  ]

  const router = useRouter();
  const [buyOptionId, setBuyOptionId] = useState<number>(1);

  const goToNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {

    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = {data: []}

    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('button')) {

      const selectedProduct = products.find(
          (product) => product.id === buyOptionId
      );

      const stepData = {
        step: 6,
        type: StepType.Checkout,
        answer: selectedProduct?.price,
      }

      steps.data.push(stepData)
      localStorage.setItem("steps", JSON.stringify(steps))

      const sendDataToServer = await stepsAction(steps.data)

      if (!sendDataToServer) console.log('Step data not sent to DB')

      router.push("/checkout/delivery");
    }
  }

  const selectBuyOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const element = e.target.closest('.option')

    if (!(element instanceof HTMLElement)) return
    if (e.target.closest('.active')) return;

    const productId = element.dataset.id;
    if (productId) setBuyOptionId(+productId);
  }


  return (

      <div className="checkout" onClick={selectBuyOption}>
        <h1>Wybierz ofertę <br/>indywidualną</h1>

        {products.map((product) => (
            <div
                key={product.id}
                data-id={product.id}
                className={`option ${product.id === buyOptionId ? 'active' : ''}`}
            >
              <div className="image">
                <Image
                    src={product.image}
                    alt={product.alt}
                    // priority={true}
                />
              </div>
              <div className="title">
                {product.title} <span>{product.model}</span>
                <div className="subtitle">
                  {product.subTitle} <span>{product.subTitleModel}</span>
                </div>
              </div>
              <div className="bottom">
                <div className="radio"></div>
                <div className="price">{product.price}</div>
              </div>
            </div>
        ))}

        <button className={'button'} onClick={goToNextStep}>Złóż zamówienie</button>
      </div>
  )
}
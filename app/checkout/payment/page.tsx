'use client'

import React from "react";
import Image from "next/image";
import MediaExpert from '@/app/static/img/checkout/mediaexpert.png'
import '@/app/checkout/styles.checkout.css'
import {StepType} from "@/app/actions/actions.types";
import {deleteSessionId, stepsAction} from "@/app/actions/steps.action";

export default function PaymentPage() {

  const goToPartner = async () => {
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = {data: []}

    const stepData = {
      step: 8,
      type: StepType.Checkout,
      question: 'Kurva',
      answer: 'redirect to the Partner',
    }

    steps.data.push(stepData)
    localStorage.removeItem("steps")

    const sendDataToServer = await stepsAction(steps.data)
    if (!sendDataToServer) console.log('Step data not sent to DB')

    await deleteSessionId()

    window.location.href = 'https://mediaexpert.pl/'
  }

  return (
      <div className="checkout">
        <div className="payment">
          <h1>Kurva przepraszam</h1>
          <p>К сожалению, мы не можем доставить выбранный товар по указанному
            адресу. Вы можете приобрести этот товар у нашего партнера:</p>
          <div className={'link'} onClick={goToPartner} >
            <Image
                src={MediaExpert}
                alt='MediaExpert'
                // priority={true}
            />
            Перейти на сайт партнера
          </div>
        </div>
      </div>
  )
}
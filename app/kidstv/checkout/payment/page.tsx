'use client'

import React from "react";
import Image from "next/image";
import MediaExpert from '@/app/static/img/checkout/mediaexpert.png'
import '@/app/kidstv/checkout/styles.checkout.css'
import {StepType} from "@/app/actions/actions.types";
import {deleteSessionId, stepsAction} from "@/app/actions/steps.action";

export default function PaymentPage() {

  const goToPartner = async () => {
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = {data: []}

    const stepData = {
      step: 5,
      type: StepType.Checkout,
      question: 'Kurva',
      answer: 'redirect to the Partner',
    }

    steps.data.push(stepData)
    localStorage.removeItem("steps")

    const sendDataToServer = await stepsAction(steps.data)
    if (!sendDataToServer) console.log('Step data not sent to DB')

    await deleteSessionId()

    window.location.href = 'https://www.mediaexpert.pl/telewizory-i-rtv/telewizory/telewizor-kivi-kids-tv-32-led-android-tv?%2Fsearch%3Fquery[menu_item]=&query[querystring]=kidstv'
  }

  return (
      <div className="checkout">
        <div className="payment">
          <h1>Ups... Występił problem</h1>
          <p>Niestety nie jesteśmy w stanie dostarczyć
            wybrany produkt pod wskazanym adresem.
            Możesz kupić ten produkt od
            naszego partnera:
          </p>
          <div className={'link'} onClick={goToPartner} >
            <Image
                src={MediaExpert}
                alt='MediaExpert'
                // priority={true}
            />
            Przejdź do witryny partnera
          </div>
        </div>
      </div>
  )
}
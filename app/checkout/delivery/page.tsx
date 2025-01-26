"use client"

import '../styles.checkout.css'
import React, {useEffect, useState} from "react";
import {StepType} from "@/app/actions/actions.types";
import {stepsAction} from "@/app/actions/steps.action";
import {useRouter} from "next/navigation";

export default function CheckoutDelivery() {

  const router = useRouter();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    agree: '',
  });


  const goToPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLElement)) return;

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    const data = Object.fromEntries(formDataObj.entries());
    // console.log(data);

    if (data.name === '') {
      setErrors(prevValues => ({
        ...prevValues, name: 'You have to enter a name.',
      }))
    } else {
      setErrors(prevValues => ({
        ...prevValues, name: ''
      }))
    }

    if (data.email === '') {
      setErrors(prevValues => ({
        ...prevValues, email: 'You have to enter an email.',
      }))
    } else {
      setErrors(prevValues => ({
        ...prevValues, email: ''
      }))
    }

    if (data.phone === '') {
      setErrors(prevValues => ({
        ...prevValues, phone: 'You have to enter a phone number.',
      }))
    } else {
      setErrors(prevValues => ({
        ...prevValues, phone: ''
      }))
    }

    if (data.address === '') {
      setErrors(prevValues => ({
        ...prevValues, address: 'You have to enter an address.',
      }))
    } else {
      setErrors(prevValues => ({
        ...prevValues, address: ''
      }))
    }

    if (data.agree !== 'on') {
      setErrors(prevValues => ({
        ...prevValues, agree: 'You have to accept conditions'
      }))
    } else {
      setErrors(prevValues => ({
        ...prevValues, agree: ''
      }))
    }

    if (data.name === '') return
    if (data.email === '') return
    if (data.phone === '') return
    if (data.address === '') return
    if (!data.agree || data.agree !== 'on') return



    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = {data: []}

    const stepData = {
      step: 7,
      type: StepType.Checkout,
      question: 'Składanie zamówienia',
      answer: data,
    }

    steps.data.push(stepData)
    localStorage.setItem("steps", JSON.stringify(steps))

    const sendDataToServer = await stepsAction(steps.data)

    if (!sendDataToServer) console.log('Step data not sent to DB')

    router.push("/checkout/payment");
  }

  const changeFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.tagName === "INPUT" && e.target.type === "text") {
      const {name, value} = e.target;
      const cleanedValue = value.replace(/[<>\\"'`{}[\]]/g, "");
      setValues((prevValues) => ({
        ...prevValues,
        [name]: cleanedValue,
      }));
    }
  }


  return (
      <div className="checkout">
        <form className={'checkout-form'} onSubmit={goToPayment}>
          <h1>Składanie zamówienia</h1>
          <label htmlFor="name">Imię i nazwisko
            <input type="text" name={"name"} onChange={changeFormHandler} value={values.name}/>
            {errors.name && (<div className={'error'}>{errors.name}</div>)}
          </label>
          <label htmlFor="email">Email
            <input type="text" name={"email"} onChange={changeFormHandler} value={values.email}/>
            {errors.email && (<div className={'error'}>{errors.email}</div>)}
          </label>
          <label htmlFor="phone">Telefon
            <input type="text" name={"phone"} onChange={changeFormHandler} value={values.phone}/>
            {errors.phone && (<div className={'error'}>{errors.phone}</div>)}
          </label>
          <label htmlFor="address">Miasto, kod pocztowy do wysyłki
            <input type="text" name={"address"} onChange={changeFormHandler} value={values.address}/>
            {errors.address && (<div className={'error'}>{errors.address}</div>)}
          </label>
          <label className={'checkbox'}>
            <input type="checkbox" name={"agree"} placeholder="Delivery Address"/>
            By submitting this form, you confirm and consent to the processing, storage and transfer of your personal
            data in accordance with the laws of the European Union https://gdpr-info.eu/.
            You can contact our Customer Care team regarding any request related to our products and services (service,
            return, warranty).
            The personal data is collected and processed solely for the purposes stated above and to assess the quality
            of the service.
            If you do not fill in the required data, you will not be able to access all or part of the Customer Care
            Services.
          </label>
          {errors.agree && (<div className={'error'}>{errors.agree}</div>)}
          <button>Go to Payment</button>
        </form>
      </div>
  )
}
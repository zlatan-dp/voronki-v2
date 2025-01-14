"use client"

import {toPayment} from "@/app/actions/checkout.action";
import './styles.checkout.css'
import {useState} from "react";

export default function CheckoutPage() {

  const [error, setError] = useState<string>('');

  const goToPayment = () => {
    setError('Something wrong...');
  }

  return (
      <form className={'checkout-form'} action={toPayment}>
        <input type="text" name={"name"} placeholder="Name"/>
        <input type="text" name={"email"} placeholder="Email"/>
        <input type="text" name={"phone"} placeholder="Phone"/>
        <input type="text" name={"city"} placeholder="City"/>
        <input type="text" name={"zip"} placeholder="ZIP code"/>
        {/* <input type="text" name={"address"} placeholder="Delivery Address"/> */}
        {error}
        <button type={"submit"} onClick={goToPayment}>Select Delivery and Payment Method</button>
      </form>
  )
}
"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BenefitsList from "./BenefitsList/BenefitsList";
import FaqList from "./FaqList/FaqList";

import { PlanData } from "./planData";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function enterEmail() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const [selectedPlans, setSelectedPlans] = useState("");

  const toggleSelect = useCallback((id) => {
    setSelectedPlans(id);
  }, []);

  const planPayload = (id) => {
    return PlanData.find((p) => p.id === id)?.duration ?? null;
  };

  const goToNextStep = async (plan) => {
    await nextStep({
      step: 160,
      type: "info",
      question: "Choose your plan",
      answer: plan || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/error-page`);
  };

  const handleSubmit = async () => {
    if (!selectedPlans) return;

    const payload = planPayload(selectedPlans);
    await goToNextStep(payload);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>Choose your plan</SectionTitle>
        </div>
        <ul className={styles.planList}>
          {PlanData.map(
            ({ id, duration, totalPrice, currency, price, cents }) => {
              const isActive = selectedPlans === id;
              return (
                <li key={id}>
                  <div
                    className={`${styles.inputWrap} ${
                      isActive ? styles.active : ""
                    }`}
                    onClick={() => toggleSelect(id)}
                  >
                    <div className={styles.durationWrap}>
                      <p className={styles.duration}>{duration}</p>
                      <p className={styles.totalPrice}>
                        {currency}
                        {totalPrice}
                      </p>
                    </div>
                    <div className={styles.priceDayWrap}>
                      <p className={styles.currency}>{currency}</p>
                      <p className={styles.price}>{price}</p>
                      <div className={styles.priceDay}>
                        <p className={styles.cents}>{cents}</p>
                        <p className={styles.perDay}>per day</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
        <SubmitBtn disabled={!selectedPlans} onClick={handleSubmit}>
          Continue
        </SubmitBtn>
      </div>
      <div className={styles.benefitsWrap}>
        <SectionTitle>What you get with Headway</SectionTitle>
        <BenefitsList />
      </div>
      <div className={styles.faqWrap}>
        <SectionTitle>We are ready to answer your questions</SectionTitle>
        <FaqList />
      </div>
    </div>
  );
}

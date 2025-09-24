"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import classNames from "classnames";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function enterEmail() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    let newErrors = {};
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToNextStep = async (e) => {
    e.preventDefault();

    if (validateEmail()) {
      await nextStep({
        step: 150,
        type: "info",
        question: "Achieve your goals with Headway",
        answer: email || "next",
        time: await getCurrentTime(),
      });

      router.push(`/intensives/${currentFlow}/choose-plan`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>
            <span className={styles.accent}>Achieve your goals</span>
            with Headway
          </SectionTitle>
          <p className={styles.text}>
            Enter your email to create a personal account
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="E-Mail"
              className={classNames(styles.input, {
                [styles.error]: errors.email,
              })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <p className={styles.legalText}>
            By continuing you indicate that you've read and agree to our Terms &
            Conditions, Privacy Policy and Subscription Policy
          </p>
          <SubmitBtn disabled={false} onClick={goToNextStep} submit="submit">
            Continue
          </SubmitBtn>
        </form>
      </div>
    </div>
  );
}

"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import BlockWrap from "../../components/blockWrap/blockWrap";
import Container from "../../components/container/container";

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
        step: 100,
        type: "info",
        question: "Enter your email",
        answer: email || "next",
        time: await getCurrentTime(),
      });

      await fbq("track", "CompleteRegistration");

      router.push(`/sprints/${currentFlow}/thanks`);
    }
  };

  return (
    <Container>
      <BlockWrap>
        <p className={styles.text}>
          Enter your email address to receive your personalized offer and
          step-by-step instructions on how to get your micro-learning plan.
        </p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="E-Mail"
              className={`${styles.input} ${errors.email ? styles.error : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <SubmitBtn
            disabled={email === ""}
            onClick={goToNextStep}
            submit="submit"
          >
            Submit
          </SubmitBtn>
        </form>
        <p className={styles.legalText}>
          Your data will be used solely for this purpose and will not be shared
          with third parties.
        </p>
      </BlockWrap>
    </Container>
  );
}

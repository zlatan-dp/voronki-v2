"use client";

import styles from "./page.module.css";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import Container from "../../components/container/container";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function enterEmail() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [agreePolicy, setAgreePolicy] = useState(true);
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
        step: 18,
        type: "info",
        question: "Enter your email",
        answer: email || "next",
        time: await getCurrentTime(),
      });

      router.push(`/firstday/${currentFlow}/paywall`);
    }
  };

  return (
    <Container>
      <SectionTitle ta={"center"}>
        Your
        <br /> Personalized Recovery Program is Ready!
      </SectionTitle>

      <p className={styles.text}>
        Enter your email address to create your personal account.
      </p>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Your email"
            className={`${styles.input} ${errors.email ? styles.error : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        {/* <div className={styles.checkboxContainerWrap}>
            <label className={styles.checkboxContainer}>
              <input type="checkbox" id="mailNews" />
              <span className={styles.checkboxCustom}></span>
              <span className={styles.checkText}>
                I agree to receive the latest ChatMind news and updates via
                email
              </span>
            </label>
          </div> */}

        <div className={styles.checkboxContainerWrap}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="policy"
              checked={agreePolicy}
              onChange={(e) => setAgreePolicy(e.target.checked)}
            />
            <span className={styles.checkboxCustom}></span>
            <span className={styles.checkText}>
              I agree to ChatMind{" "}
              <Link
                href={`/firstday/${currentFlow}/terms-of-use`}
                className={styles.privacyLink}
              >
                Terms of use
              </Link>{" "}
              and{" "}
              <Link
                href={`/firstday/${currentFlow}/privacy-policy`}
                className={styles.privacyLink}
              >
                Privacy policy
              </Link>
            </span>
          </label>
        </div>

        <SubmitBtn
          disabled={!email || !agreePolicy}
          onClick={goToNextStep}
          submit="submit"
        >
          Create account to continue
        </SubmitBtn>
      </form>
      <p className={styles.legalText}>
        Your data will be used solely for this purpose and will not be shared
        with third parties.
      </p>
    </Container>
  );
}

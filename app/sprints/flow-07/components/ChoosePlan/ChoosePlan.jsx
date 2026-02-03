import styles from "./ChoosePlan.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

import { useTimer } from "../../../actions/useTimerContext";

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import PlanList from "./PlanList/PlanList";
import PayIconsList from "./PayIconList/PayIconList";

import { PlanData } from "./planData";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

export default function ChoosePlanComponent({ showTitle = true }) {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const { minutes, seconds, timerActive } = useTimer();

  const goToNextStep = async () => {
    await nextStep({
      step: 18,
      type: "info",
      question: "choose your plan",
      answer: "pay btn click",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  const handleSubmit = async () => {
    // await fbq("track", "AddToCart");

    await goToNextStep();
  };

  return (
    <>
      <div className={styles.packageWrap}>
        {showTitle && (
          <>
            <SectionTitle ta={"center"}>
              Your 30‑Day
              <br /> Sharper Mind Plan
            </SectionTitle>
            <p className={styles.text}>
              Let's make your brain work for you, not against you. <br />
              No more foggy mornings or endless distractions – just quick wins
              to think clearer and get stuff done.
            </p>
          </>
        )}

        <SectionTitle ta={"center"}>Here's your daily toolkit</SectionTitle>
        <PlanList plans={PlanData} />
      </div>
      <BlockWrap padding={"small"}>
        <SectionTitle ta={"center"}>Your bundle special price:</SectionTitle>
        <div className={styles.specialPriceWrap}>
          <p className={styles.dollarsText}>$14</p>
          <p className={styles.centsText}>99</p>
          <p className={styles.monthText}>/month</p>
        </div>
        {timerActive && (
          <span className={styles.specialTimer}>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
        )}
        <div className={styles.priceInfoWrap}>
          <p className={styles.mainText}>Normally: $100+/month separate.</p>
          <p className={styles.secondaryText}>
            Based on avg. public App Store prices.
          </p>
          <p className={styles.secondaryText}>Actual avg. pricing may vary.</p>
        </div>
        <SubmitBtn onClick={handleSubmit} wide={"wide"}>
          👉🏻 Grab it now 👈🏻
        </SubmitBtn>
        <PayIconsList />
        <div className={styles.paySafeWrap}>
          <svg
            className={styles.paySafeIcon}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M16.5301 6.15214C16.9984 6.44485 17.1408 7.0618 16.8481 7.53013L11.8481 15.5301C11.6733 15.8097 11.3719 15.9852 11.0425 15.9992C10.7131 16.0132 10.3979 15.8639 10.2001 15.6001L7.20006 11.6001C6.86869 11.1583 6.95823 10.5315 7.40006 10.2001C7.84189 9.86876 8.46869 9.95831 8.80006 10.4001L10.925 13.2334L15.1521 6.47013C15.4448 6.0018 16.0617 5.85942 16.5301 6.15214Z"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 8.4C3 6.15979 3 5.03968 3.43597 4.18404C3.81947 3.43139 4.43139 2.81947 5.18404 2.43597C6.03969 2 7.15979 2 9.4 2H14.6C16.8402 2 17.9603 2 18.816 2.43597C19.5686 2.81947 20.1805 3.43139 20.564 4.18404C21 5.03968 21 6.15979 21 8.4V10.0506C21 12.4052 21 13.5825 20.6921 14.66C20.4019 15.6755 19.9136 16.6234 19.2552 17.4492C18.5566 18.3254 17.598 19.0088 15.6808 20.3758C14.3772 21.3052 13.7254 21.7698 13.0167 21.9561C12.3502 22.1312 11.6498 22.1312 10.9833 21.9561C10.2746 21.7698 9.62282 21.3052 8.31926 20.3758C6.40201 19.0088 5.44337 18.3254 4.7448 17.4492C4.08642 16.6234 3.59806 15.6755 3.30789 14.66C3 13.5825 3 12.4052 3 10.0506V8.4ZM19 8.4V10.0506C19 12.5217 18.9819 13.3658 18.7691 14.1105C18.5515 14.8721 18.1852 15.583 17.6914 16.2024C17.2086 16.8079 16.5318 17.3127 14.5197 18.7473C13.0824 19.772 12.777 19.9512 12.5083 20.0218C12.1751 20.1093 11.8249 20.1093 11.4917 20.0218C11.223 19.9512 10.9176 19.772 9.48031 18.7473C7.46817 17.3127 6.79141 16.8079 6.3086 16.2024C5.81481 15.583 5.44854 14.8721 5.23092 14.1105C5.01812 13.3658 5 12.5217 5 10.0506V8.4C5 7.24689 5.00156 6.50234 5.04785 5.93567C5.09225 5.39234 5.1676 5.19091 5.21799 5.09202C5.40973 4.71569 5.71569 4.40973 6.09202 4.21799C6.19091 4.1676 6.39235 4.09225 6.93567 4.04785C7.50235 4.00156 8.24689 4 9.4 4H14.6C15.7531 4 16.4977 4.00156 17.0643 4.04785C17.6077 4.09225 17.8091 4.1676 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C18.8324 5.19091 18.9078 5.39234 18.9521 5.93567C18.9984 6.50235 19 7.24689 19 8.4Z"
            ></path>
          </svg>
          <p className={styles.paySafeText}>Pay safe & secure</p>
        </div>
        <p className={styles.infoSmallBoldText}>
          You can cancel your
          <br /> subscription at any time
        </p>
        <p className={styles.discountedText}>
          The $9.99 is the discounted price and applies to your first month of
          subscription. The subscription will automatically renew at full price
          of <span className={styles.greenText}>$9.99</span> per month at the
          end of the first month promotional period, and will continue to renew
          until you cancel in your account.
        </p>
      </BlockWrap>
    </>
  );
}

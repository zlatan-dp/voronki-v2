import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Feedback.module.css";

import Image from "next/image";

import { FeedbackData } from "./FeedbackData";
import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

export default function FeedbackList() {
  return (
    <BlockWrap>
      <SectionTitle>Feedback From Our Members</SectionTitle>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={15}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.feedbackSlider}
      >
        {FeedbackData.map(({ id, text, img, nickname }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.feedbackWrap}>
                <div className={styles.nicknameWrap}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={img}
                      alt="photo"
                      width={100}
                      height={100}
                      quality={100}
                    />
                  </div>
                  <div className={styles.nameWrap}>
                    <p className={styles.nicknameText}>{nickname}</p>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                  </div>
                </div>
                <p className={styles.feedbackText}>{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BlockWrap>
  );
}

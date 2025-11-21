import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Stars from "../Stars/Stars";
import styles from "./Feedback.module.css";

import Image from "next/image";

import { FeedbackData } from "./FeedbackData";

export default function FeedbackList() {
  return (
    <div className={styles.feedbackList}>
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
        className={styles.slider}
      >
        {FeedbackData.map(({ id, raiting, text, img, nickname }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.feedbackWrap}>
                <Stars percent={raiting} />
                <p className={styles.feedbackText}>{text}</p>
                <div className={styles.nicknameWrap}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={img}
                      alt="photo"
                      width={50}
                      height={50}
                      quality={100}
                    />
                  </div>
                  <p className={styles.fnicknameText}>{nickname}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

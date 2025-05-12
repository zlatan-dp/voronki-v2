"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./FilmsInfo.module.css";

import SectionTitle from "../sectionTitle/sectionTitle";
import Button from "../button/button";
import { FilmsData } from "./FilmsInfoData";

export default function FilmsInfo({ href }) {
  return (
    <div className={styles.filmsContainer}>
      <div className={styles.container}>
        <SectionTitle variant="gray">
          Eigenschaften <br />
          der Schutzfolie
        </SectionTitle>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2}
        spaceBetween={15}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className={styles.slider}
      >
        {FilmsData.map(({ id, img, title, subTitle, text }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <div
              className={styles.infoWrap}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>
                <p className={styles.text}>{text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.container}>
        <Button href={href} dataBlock={"Films Info section"}>
          Jetzt kaufen
        </Button>
      </div>
    </div>
  );
}

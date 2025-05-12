"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Protective.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import Button from "../button/button";
import { ProtectiveData } from "./ProtectiveData";

export default function Protective({ href }) {
  return (
    <div className={styles.protectiveContainer}>
      <SectionTitle align="center">Schutzschichten</SectionTitle>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={15}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className={styles.slider}
      >
        {ProtectiveData.map(({ id, subTitle, text }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <div className={styles.infoWrap}>
              <p className={styles.number}>{id}</p>
              <p className={styles.subTitle}>{subTitle}</p>
              <p className={styles.text}>{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button href={href} dataBlock={"Protective section"}>
        Jetzt kaufen
      </Button>
    </div>
  );
}

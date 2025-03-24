"use client";

import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Feedback.module.css"
import SectionTitle from "../sectionTitle/sectionTitle"

import { FeedbackData } from "./FeedbackData"

export default function Feedback() {
    return (
        <div className={styles.feedbackContainer}>
            <SectionTitle align={'center'}>Kunden&shy;rezensionen</SectionTitle>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1.2}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{ clickable: true }}
                className={styles.slider}
                >
                    {FeedbackData.map(({id, firstName, surName, date, rating, text}) => (
                        <SwiperSlide key={id} className={styles.slide}>
                                <p className={styles.name}>{firstName}</p>
                                {/* <p className={styles.name}>{surName}</p> */}
                                <p className={styles.date}>{date}</p>
                                <div className={styles.rating}>
                                {Array.from({ length: rating }).map((_, index) => (
                                    <span key={index} className={styles.star}></span>
                                ))}
                                </div>
                                <p className={styles.text}>{text}</p>
                        </SwiperSlide>
                    ))}
                
            </Swiper>
        </div>
    )
}
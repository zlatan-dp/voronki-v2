import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./BookList.module.css";

import Image from "next/image";

import { BookData } from "./bookData";
import { useState, useEffect } from "react";

export default function BookList() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("ChatMNDBookSet");
    console.log(stored);

    const q40Answer = stored ? Number(stored) : null;

    if (q40Answer !== null) {
      const found = BookData.find((book) => book.id === q40Answer);
      setBooks(found);
    }
  }, []);

  console.log(books);

  return (
    <div className={styles.booksListWrap}>
      <div>
        <p>Your 5-book set for </p>
        <p>{books?.category}</p>
      </div>
      <Swiper
        modules={[Pagination]}
        // modules={[Autoplay, Pagination]}
        slidesPerView={1.3}
        // spaceBetween={15}
        // centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.slider}
      >
        {books?.books.map(({ id, title, author, img }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.bookskWrap}>
                <div className={styles.imgWrap}>
                  <Image
                    src={img}
                    alt="photo"
                    width={195}
                    height={300}
                    quality={100}
                  />
                </div>
                <div className={styles.titleWrap}>
                  <p className={styles.titleText}>{title}</p>
                  <p className={styles.titleText}>{author}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

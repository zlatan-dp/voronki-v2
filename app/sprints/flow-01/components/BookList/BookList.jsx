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

    const q40Answer = stored ? Number(stored) : null;

    if (q40Answer !== null) {
      const found = BookData.find((book) => book.id === q40Answer);
      setBooks(found);
    }
  }, []);

  // console.log(books);

  return (
    <div className={styles.booksListWrap}>
      <div className={styles.recommendedWrap}>
        <p className={styles.recommendedText}>✓ Recommended for You</p>
      </div>

      <div className={styles.categoryWrap}>
        <p className={styles.categoryText}>Your 5-book set for </p>
        <p className={styles.categoryText}>{books?.category}</p>
      </div>
      {books && (
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.4}
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
                      width={249}
                      height={372}
                      quality={100}
                      priority
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
      )}
    </div>
  );
}

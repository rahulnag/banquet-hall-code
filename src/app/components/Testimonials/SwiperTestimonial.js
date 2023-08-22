"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./page.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";

import { testimonials } from "@/data";
export default function SwiperTestimonial() {
  return (
    <div className={styles["testimonial-container"]}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
        spaceBetween={50}
        width={null}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
        }}
      >
        {testimonials.testimonial.map((t) => {
          return (
            <SwiperSlide>
              <div className={styles.testimonials}>
                <div>
                  <p className={styles.message}>{`" ${t.message} "`}</p>
                </div>
                <div className={styles["name-star-container"]}>
                  <div>
                    <p>{t.name}</p>
                  </div>
                  <div>{"★★★★★✩✩✩✩✩".slice(5 - t.star, 10 - t.star)}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

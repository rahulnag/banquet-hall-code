import SwiperTestimonial from "./SwiperTestimonial";
import styles from "./page.module.css";
import { testimonials } from "@/data";
export default function Testimonials() {
  return (
    <div className="" style={{ textAlign: "center" }}>
      <h5 className={styles.heading}>{testimonials.heading}</h5>
      <button className="primary-button" style={{ textAlign: "center" }}>
        Write Reviews for us
      </button>
      <div className="normal-gap">{""}</div>
      <SwiperTestimonial />
    </div>
  );
}

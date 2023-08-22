import { venue } from "@/data";
import styles from "./page.module.css";
import Image from "next/image";
export default function aboutus() {
  return (
    <div className={`${styles["venue-container"]}`}>
      <h2 className={styles.heading}>{venue.heading}</h2>

      <p className={styles.subheading}>{venue.subheading}</p>

      <Image
        fill
        src="/landing-page-image/myvenue.png"
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="venue"
      />
    </div>
  );
}

import styles from "./page.module.css";
import { homedata } from "@/data";
import EventSupporting from "./components/EventSupporting";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactUs";
import Map from "./components/MapComponent";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["landing-page-background"]}>
        <h1 className={`${styles.welcomeText}`}>{homedata.welcometext}</h1>
        <h5 className={styles.welcomeSubheading}>{homedata.subheading}</h5>{" "}
        <div className="normal-gap"> </div>
        <Link href="/contact-us" key="/contact-us">
          <button className="primary-button">Book Now</button>
        </Link>
        <small className={styles["booking-starting-price"]}>
          {homedata.bookingStartingPrice}
        </small>
      </div>
      <p className={styles.welcomeSubSubheading}>{homedata.subsubheading}</p>
      <EventSupporting />
      <Venue />
      <Gallery />
      <Testimonials />
      <Contact />
      <Map />
    </main>
  );
}

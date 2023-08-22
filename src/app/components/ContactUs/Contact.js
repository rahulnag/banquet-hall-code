import { contactus } from "@/data";
import styles from "./page.module.css";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div
        className={styles["home-page-contact"]}
        style={{ textAlign: "center" }}
      >
        <h5>{contactus.heading}</h5>
        <div className="normal-gap">{""}</div>
        <button className="primary-button">Check our service</button>
        <button className="primary-button">Contact us/ Virtual tour</button>
      </div>

      <div className={styles["card-holder"]}>
        <div className={styles["contact-card"]}>
          <div>
            <Image
              height={50}
              width={50}
              src="/landing-page-image/address.png"
              alt="postal-address"
            />
          </div>
          <p className={styles["contact-head"]}>Postal address</p>

          <div>
            <p>{contactus.address}</p>
          </div>
        </div>

        <div className={styles["contact-card"]}>
          <div>
            <Image
              height={50}
              width={50}
              src="/landing-page-image/phone.png"
              alt="phone-email"
            />
          </div>
          <p className={styles["contact-head"]}>Phone & email</p>

          <div>
            <p>{contactus.phone}</p>
            <p>{contactus.emailid}</p>
          </div>
        </div>

        <div className={styles["contact-card"]}>
          <div>
            <Image
              height={50}
              width={50}
              src="/landing-page-image/openhours.png"
              alt="open-hour"
            />
          </div>
          <p className={styles["contact-head"]}>Open Hours</p>

          <div>
            <p>{contactus.openhours}</p>
          </div>
        </div>
      </div>
    </>
  );
}

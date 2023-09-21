"use client";
import { useState } from "react";
import styles from "./style.module.css";
import Swal from "sweetalert2";
export default function Booking() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
    checkindate: "",
    checkoutdate: "",
    message: "",
  });

  const submitHandler = () => {
    console.log(data);
    if (
      data.name !== "" &&
      data.phone !== "" &&
      data.people != "" &&
      data.checkindate !== "" &&
      data.checkoutdate !== ""
    ) {
      Swal.fire("Thank you!", "We will contact you soon.", "success");
      setData({});
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required details.",
      });
    }
  };
  return (
    <div className={`${styles["booking-container"]} container`}>
      <div className={styles.holder}>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="name">
            Your Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="visitor_name"
            placeholder="John Doe"
            pattern="[A-Z\sa-z]{3,20}"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target?.value })}
          />
        </div>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="email">
            Your E-mail
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="visitor_email"
            placeholder="john.doe@email.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target?.value })}
          />
        </div>
      </div>

      <div className={styles.holder}>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="phone">
            Your Phone
          </label>
          <input
            className={styles.formInput}
            type="tel"
            id="phone"
            name="visitor_phone"
            placeholder="498-348-3872"
            pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
            required
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target?.value })}
          />
        </div>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="adult">
            Number of people (approx.)
          </label>
          <input
            className={styles.formInput}
            type="number"
            id="adult"
            name="total_adults"
            placeholder="Please fill number of people"
            min="1"
            required
            value={data.people}
            onChange={(e) => setData({ ...data, people: e.target?.value })}
          />
        </div>
      </div>

      <div className={styles.holder}>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="checkin-date">
            Check-in Date
          </label>
          <input
            className={styles.formInput}
            type="date"
            id="checkin-date"
            name="checkin"
            required
            value={data.checkindate}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, checkindate: e.target?.value });
            }}
          />
        </div>
        <div className={styles["elem-group"]}>
          <label className={styles.formLabel} for="checkout-date">
            Check-out Date
          </label>
          <input
            className={styles.formInput}
            type="date"
            id="checkout-date"
            name="checkout"
            required
            value={data.checkoutdate}
            onChange={(e) =>
              setData({ ...data, checkoutdate: e.target?.value })
            }
          />
        </div>
      </div>

      <div>
        <label className={styles.formLabel} for="message">
          Anything Else?
        </label>
        <textarea
          className={styles.formTextarea}
          id="message"
          name="visitor_message"
          placeholder="Tell us anything else that might be important."
          required
        ></textarea>
      </div>
      <button className="primary-button" type="submit" onClick={submitHandler}>
        Confirm your booking
      </button>
      <small>Our executive will contact you soon.</small>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-logo"]}>
        <Image
          height={50}
          width={50}
          src="/logo.png"
          className="logo"
          alt="logo"
        />
      </div>

      <div className={styles.nav}>
        <div className={`${styles.links}`}>
          <Link
            href="/"
            key="/"
            className={`${
              "/" == pathname ? styles["text-blue"] : styles["text-black"]
            }`}
          >
            Home
          </Link>
        </div>
        <div className={`${styles.links}`}>
          <Link
            href="/gallery"
            key="/gallery"
            className={`${
              "/gallery" == pathname
                ? styles["text-blue"]
                : styles["text-black"]
            }`}
          >
            Gallery
          </Link>
        </div>
        <div className={`${styles.links}`}>
          <Link
            href="/services"
            key="/services"
            className={`${
              "/services" == pathname
                ? styles["text-blue"]
                : styles["text-black"]
            }`}
          >
            Services
          </Link>
        </div>
        <div className={`${styles.links}`}>
          <Link
            href="/contact-us"
            key="/contact-us"
            className={`${
              "/contact-us" == pathname
                ? styles["text-blue"]
                : styles["text-black"]
            }`}
          >
            Contact Us
          </Link>
        </div>
        <div className={`${styles.links}`}>
          <Link
            href="/about-us"
            key="/about-us"
            className={`${
              "/about-us" == pathname
                ? styles["text-blue"]
                : styles["text-black"]
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

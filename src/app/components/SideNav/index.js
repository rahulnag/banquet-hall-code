"use client";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.sideNavButtonHolder}>
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
        <Image
          height={50}
          width={50}
          src="/logo.png"
          className="logo"
          alt="logo"
        />
      </div>
      <div id={"mySidenav"} className={styles.sidenav}>
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
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

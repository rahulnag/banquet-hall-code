import { eventsSupporting } from "@/data";
import styles from "./page.module.css";
import Image from "next/image";
const index = () => {
  return (
    <div className="container">
      <h2 className={styles.heading}>{eventsSupporting.heading}</h2>
      <div className={styles.eventListing}>
        {eventsSupporting.eventslist.map((event) => {
          return (
            <>
              <div className={`${styles["flip-card"]}`}>
                <div className={styles["flip-card-inner"]}>
                  <div
                    className={styles["flip-card-front"]}
                    style={{ background: event.color }}
                  >
                    <div>
                      <h5>{event.name}</h5>
                    </div>
                    <div>
                      <Image
                        height={100}
                        width={100}
                        src={
                          "/landing-page-image/" +
                          event.name.toLocaleLowerCase().replaceAll(" ", "") +
                          ".png"
                        }
                        // quality={100}
                        alt={`Pratishtha Banquet ${event.name}`}
                      />
                    </div>
                  </div>
                  <div className={styles["flip-card-back"]}>
                    <div>
                      <h5>{event.name}</h5>
                    </div>
                    <div>
                      <h6>{event.details}</h6>
                    </div>
                    <div>
                      <button className="primary-button">View more</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default index;

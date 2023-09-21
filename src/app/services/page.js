import { services, faq } from "@/data";
import styles from './page.module.css'
import Services from "./Services";
import Faq from "./Faq";
export default function page() {
  return (
    <div className={`container ${styles['service-container']}`}>
      <h4 className={styles.heading}>{services.heading}</h4>
      <Services />
      <div className="normal-gap">{''}</div>
      <h4 className={styles.heading}>{faq.heading}</h4>
      <Faq />
    </div>
  );
}

import { footer } from "@/data";
import styles from './style.module.css'
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div>
        <h2>{footer.heading}</h2>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles['footer-link-holder']}>
          {footer.web_list.map(list => {
            return <li><Link href={list.route}>{list.name.toUpperCase()}</Link></li>
          })}
        </div>

        <div className={styles['footer-socialmedia-holder']}>
          {
            footer.links.map(link => {
              return <div>
                <a href={link.link} target="_blank"><Image src={`/footer/${link.name}.png`} height={50} width={50} /></a>
              </div>
            })
          }
        </div>
        <div className={styles['footer-subscribe']}>
          <p>{footer.subscribe}</p>
          <input type="text" placeholder="email" /><button className="primary-button">Send</button>
        </div>
      </div>
      <div className={styles['footer-copyright']}><small>{footer.copyright}</small></div>

    </footer>
  );
}

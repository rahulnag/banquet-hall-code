import Image from 'next/image';
import styles from './page.module.css'
import { services } from "@/data";
import Faq from './Faq';

export default function Services() {
    return (
        <>
            <div className={styles.facilities}>
                {
                    services.facilities.map(facilities => {
                        return (
                            <div className={styles.eachFacilities}>
                                <div className={styles.servicelogo}><Image src={`/services/${facilities.img}.png`} height={30} width={30} /></div>

                                <div className={styles.serviceName}>
                                    <span>{facilities.name}</span></div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
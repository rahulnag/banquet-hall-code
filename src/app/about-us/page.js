import { aboutus } from '@/data'
import styles from './page.module.css'
export default function service() {
    return (
        <div className='container'>
            <p className={styles.heading}>{aboutus.heading}</p>
        </div>
    )
}
'use client'
import React from 'react';
import styles from './page.module.css'
import { faq } from "@/data";


const Faq = () => {
    const [value, setValue] = React.useState()
    return (
        <>
            <div>
                {
                    faq.faq.map((faq, id) => {
                        return (
                            <div className={styles.faqcontainer}>
                                <button className={value == id ? styles.activeaccordian + " " + styles.accordion : styles.accordion} onClick={() => { setValue(id) }}>{faq.question}
                                    {value !== id ? <span className={styles.expandicon}>+</span> :
                                        <span className={styles.expandicon}>-</span>}</button>
                                <div className={value == id ? styles.active : styles.panel}>
                                    <span>{faq.answer}</span>
                                </div >
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Faq;
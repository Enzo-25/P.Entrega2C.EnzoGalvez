import React from 'react';
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return(
        <div className={styles.homePage}>
            <div className={styles.homePage__info}>
                <h1>Looking for great <span>Real Estate</span> deals?</h1>
                <p>Our platform connects investors with cash flowing deals </p>
                <div className={styles.homePage__button}>
                    <a href="#hero">
                        FIND A PROPERTY
                    </a>
                </div>
            </div>
        </div>
    )
}
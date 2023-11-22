import React from "react";
import styles from '../InfoAbout/InfoAbout.module.scss';
import {Link} from "react-router-dom";

export const InfoAbout = () => {
    return(
        <div className={styles.infoAbout}>
            <div className={styles.infoAbout__info}>
                <h1>A powerful platform to find great <span>deals</span> fast and easy</h1>
                <p>Our platform connects investors with investments. We work with experienced real estate professionals who list their deals to be acquired by investors seeking great investment deals. </p>
                <div className={styles.infoAbout__buttons}>
                    <Link to="/searchpage">
                        <div className={styles.infoAbout__buttonleft}>
                            FIND A PROPERTY
                        </div>
                    </Link>
                    <Link to="/searchpage">
                        <div className={styles.infoAbout__buttonright}>
                            SUMBIT A PROPERTY
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
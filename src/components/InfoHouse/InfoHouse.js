import React from "react";
import styles from '../InfoHouse/InfoHouse.module.scss';
import topimg from '../../assets/top-img.jpg';
import midimg from '../../assets/mid-img.jpg';


export const InfoHouse = () => {
    return (
        <div className={styles.infoHouse}>
            <div className={styles.infoHouse__top}>
                <div className={styles.top__text}>
                    <h1>Network with a community of investors</h1>
                    <p>Finding great deals in todays market may be something very challenging, but you can leverage our community and technology to find great properties to invest in</p>
                </div>
                <div className={styles.top__img}>
                    <img src={topimg} alt="top-img"/>
                </div>
            </div>
            <div className={styles.infoHouse__mid}>
                <div className={styles.mid__img}>
                    <img src={midimg} alt="mid-img"/>
                </div>
                <div className={styles.mid__text}>
                    <h1>how much would you pay for a great deal?</h1>
                    <p>Our platform has a simple pricing solution, pay just $9.99 per month and access to unlimited properties, contact sellers and agents and even list your own properties to find buyers. By paying our montly subscription you will be able to acess all our deals and properties, you can reach out and get in contact with as many sellers as you want and if you have a deal you can promote it here and sell it fast!</p>
                </div>
            </div>
        </div>
    )
}
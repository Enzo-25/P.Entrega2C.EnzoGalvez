import React from "react";
import styles from "../UserData/UserData.module.scss";
import user from "../../assets/user-id.jpg"

export const UserData = () => {
    return (
        <div className={styles.UserData}>
            <div className={styles.UserData__top}>
                <div className={styles.UserData__bg}></div>
                <div className={styles.UserData__id}>
                    <div className={styles.UserData__abs}>
                        <div className={styles.UserData__items}>
                            <img src={user}/>
                            <div className={styles.UserData__links}>
                                <h1>User Name</h1>
                                <a href="#">My Profile</a>
                                <a href="#">My Favorites</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.UserData__text}>
                <h1>Your list of favorite properties is empty</h1>
            </div>
        </div>
    )
}
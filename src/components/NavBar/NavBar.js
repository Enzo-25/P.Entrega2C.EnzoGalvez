import React, { useEffect } from "react";
import styles from './NavBar.module.scss';
import logo from '../../assets/logo-wealty.png';
import { FaUserAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const NavBar = () => {
    useEffect(() => {
        console.log("NavBar montado");
        return () => {
            console.log("NavBar desmontado");
        };
    }, []);

    return (
        <div className={styles.navbar}>
            <Link to="/">
                <div className={styles.navbar__logo}>
                    <img src={logo} alt="logo-wealty" />
                </div>
            </Link>
            <div className={styles.navbar__items}>
                <div className={styles.navbar__tools}>
                    <Link to="/searchpage">
                        <p><FaSearch className={styles.navbar__search} />Search</p>
                    </Link>
                    <Link to="/userview">
                        <p><FaUserAlt className={styles.navbar__user} />My Profile</p>
                    </Link>
                    <Link to="/searchpage">
                        <p><FaShoppingCart className={styles.navbar__user} /></p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

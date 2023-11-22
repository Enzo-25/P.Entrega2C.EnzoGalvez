import React from "react";
import styles from './Footer.module.scss';
import {IoLocation} from "react-icons/io5";
import {BsFillTelephoneFill, BsInstagram} from "react-icons/bs";  
import {GrMail} from "react-icons/gr";

export const Footer = () =>{
    return(
        <div className={styles.footer}>
           <ul className={styles.footer__items}>
                <div className={styles.footer__tools}>
                    <h1>GET IN TOUCH</h1>
                    <a href="./index.html"><IoLocation className={styles.footer__logos}/>Miami,USA</a>
                    <a href="./index.html"><BsFillTelephoneFill className={styles.footer__logos}/>(305) 842-2163</a>
                    <a href="./index.html"><GrMail className={styles.footer__logos}/>support@wealty.io</a>
                    <a href="./index.html"><BsInstagram className={styles.footer__logos}/>@wealty</a>
                </div>
           </ul>
        </div>
    )
}
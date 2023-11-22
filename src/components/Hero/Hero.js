import { React } from "react";
import { Filterbar } from '../FilterBar/Filterbar';
import { Carousel } from "../Carousel/Carousel";
import styles from './Hero.module.scss';

export const Hero = () =>{
    return(
        <section className={styles.hero} id="hero">
            <h1 className={styles.hero__title}>Find an investment property</h1>
            <div className={styles.hero__filterbar}>
                <Filterbar/>
            </div>
            <div className={styles.hero__carousel}>
                <Carousel/>
            </div>
        </section>
    )
}


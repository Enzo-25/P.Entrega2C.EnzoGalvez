import React from "react";
import styles from "../Search/Search.module.scss";
import  card  from '../../assets/card-image.jpeg';
import { SearchFilter } from "../SearchFilter/SearchFilter";

const data = [
    {
        id: 1,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    },
    {
        id: 2,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    },
    {
        id: 3,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    },
    {
        id: 4,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    }
]

export const Search = () => {   
    return (
        <div className={styles.Search}>
            <div className={styles.Search__bg}></div>
            <div className={styles.Search__map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1950.9839136068276!2d-77.05438778769683!3d-12.045734612218382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8d5bb96145b%3A0x921d91976c9090b2!2sLas%20Cucardas!5e0!3m2!1ses!2spe!4v1677948289311!5m2!1ses!2spe" width="1007" height="466"></iframe>
            </div>
            <div className={styles.Search__filter}>
                <SearchFilter/>
            </div>
            <div className={styles.Search__bottom}>
                {data.map(item => (
                    <div className={styles.Search__inf} key={item.id}>
                        <div className={styles.Search__container}>
                            <div className={styles.Search__content}>
                                <div className={styles.item__img}>
                                    <img src={card} alt=""/>
                                </div>
                                <div className={styles.item__text}>   
                                    <div className={styles.item__textleft}>
                                        <h5 className={styles.item__title}>{item.title}</h5>
                                        <h5 className={styles.item__local}>{item.adress}</h5>
                                    </div>
                                    <div className={styles.item__textright}>
                                        <h5 className={styles.item__type}>{item.type}</h5>
                                        <h5 className={styles.item__price}>{item.price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                ))}
            </div>
        </div>
    )
}


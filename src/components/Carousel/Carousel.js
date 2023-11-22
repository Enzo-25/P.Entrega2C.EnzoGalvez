import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";
import styles from '../Carousel/Carousel.module.scss';
import  card  from '../../assets/card-image.jpeg';
import {IoLocation} from "react-icons/io5";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation,Pagination,Scrollbar,A11y]);

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
    },
    {
        id: 5,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    },
    {
        id: 6,
        title: 'Multifamily in ...',
        type: 'MULTIFAMILY',
        adress: '1150 W 28th St, Hialeah, FL...',
        price: '$604,000'
    }
]

export const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__text}>
                <h1>Recent Properties</h1>
                <p>FIND YOUR NEXT INVESTMENT</p>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(item => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <Link to={`/property/${item.id}`} className={styles.slide__link}>
                            <div className={styles.slide__container}>
                                <div className={styles.slide__content}>
                                    <div className={styles.item__image}>
                                        <img src={card} alt="" />
                                    </div>
                                    <div className={styles.item__text}>
                                        <div className={styles.item__textleft}>
                                            <h5 className={styles.item__title}>{item.title}</h5>
                                            <h5 className={styles.item__local}><IoLocation />{item.adress}</h5>
                                        </div>
                                        <div className={styles.item__textright}>
                                            <h5 className={styles.item__type}>{item.type}</h5>
                                            <h5 className={styles.item__price}>{item.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

import React from 'react';
import {NavBar} from "../NavBar/NavBar.js";
import { useParams } from 'react-router-dom';
import styles from  './PropertyDetail.module.scss'

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

const PropertyDetail = () => {
    const { id } = useParams();
    const property = data.find(item => item.id.toString() === id);

    if (!property) {
        return <div>No se encontró la propiedad</div>;
    }

    return (
        <div className={styles.mainProperty}>
            <NavBar/>
            <div className={styles.secondProperty}>
                <h2>Detalles de la propiedad</h2>
                <p>Título: {property.title}</p>
                <p>Tipo: {property.type}</p>
                <p>Dirección: {property.adress}</p>
                <p>Precio: {property.price}</p>
            </div>
        </div>
    );
};

export default PropertyDetail;
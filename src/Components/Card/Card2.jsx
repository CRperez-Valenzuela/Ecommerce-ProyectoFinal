import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShoeById, addWish, removeWish } from '../../Redux/Actions'; // Ajusta la ruta según tu estructura de proyecto
import { Card as PrimeCard } from 'primereact/card';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import 'primereact/resources/themes/saga-blue/theme.css';  // O cualquier otro tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from './Card2.module.css'; // Ajusta la ruta según tu estructura de proyecto

export default function Card2({ id, name, price, image, brand }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUserData = useSelector(state => state.loggedUserData)
    const [isInWishlist, setIsInWishlist] = useState(() => {
        const isInWishlistGlobal = loggedUserData.wishList?.find(shoe => shoe.id === id)

        return isInWishlistGlobal ? true : false
    });

    const handleClick = () => {
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    const handleWishlistClick = () => {
        setIsInWishlist(!isInWishlist);
        
        if (!isInWishlist) {           //Hay que ponerlo así por que el estado todavía no se actualizó
            dispatch(addWish(id, loggedUserData.id))
        } else {
            dispatch(removeWish(id, loggedUserData.id))
        }

    };

    const header = (
        <div className={styles['card-header']}>
            <img alt={name} src={image} onClick={handleClick} />
           
        </div>
    );

    const footer = (
        <div className={styles['card-footer']}>
            <Button label="Ir al detalle" onClick={handleClick} className={styles['card-button']} />
        </div>
    );

    return (
        <PrimeCard 
            className={styles.Card}
            header={header}
            footer={footer}
        >
             {/* <ToggleButton
                label='Agregar a favoritos'
                className={`${styles.wishlistButton} ${isInWishlist ? styles.active : ''}`}
                onClick={handleWishlistClick}
            /> */}

            {
                loggedUserData.username && !loggedUserData.isAdmin &&
                <ToggleButton
                onLabel="Quitar de favoritos"
                offLabel="Añadir a favoritos"
                checked={isInWishlist}
                onChange={handleWishlistClick}
                className={`${styles.wishlistButton} ${isInWishlist ? 'p-highlight' : ''}`}
              />
            }

            <div className={styles['card-content']}>
                <div className={styles['card-title']}>{name}</div>
                <div className={styles['card-subtitle']}>{brand}</div>
                <div className={styles['card-text']}>${price}</div>
            </div>
        </PrimeCard>
    );
}
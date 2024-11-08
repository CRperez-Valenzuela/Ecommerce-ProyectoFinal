import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import alertSwal from "../../funcs/alertSwal"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import styles from './Detail.module.css';
import { addToCart, addItem } from '../../Redux/Actions';
import Review from '../Reviews/Reviews';
import Footer from "../Footer/Footer";

export default function Detail() {
    const { ID } = useParams();
    const [shoeDetail, setShoeDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const alreadyInCart = cart.find(cartItem => cartItem.item.id === parseInt(ID));
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${ID}`)
            .then(({ data }) => {
                setShoeDetail(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching shoe details:", error);
                setLoading(false);
            });
    }, [ID]);

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    const handleAddToCart = () => {
        console.log({ ...shoeDetail, selectedSize })
        if (selectedSize) {
            dispatch(addToCart({ ...shoeDetail, selectedSize }));
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Seleccione un talle',
                text: 'Por favor, selecciona un talle antes de añadir el producto al carrito.',
                confirmButtonText: 'Entendido'
            });
        }
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (!shoeDetail || !shoeDetail.id) {
        return <p>La zapatilla no fue encontrada.</p>;
    }

    const sizes = shoeDetail.sizes ? shoeDetail.sizes.map(size => ({ label: size.value, value: size.value })) : [];

    const handleAddItem = () => {
        const addedSize = shoeDetail.sizes.find(size => size.value === selectedSize)
        if (alreadyInCart.qty <= addedSize.shoesizes.quantity) {
            dispatch(addItem(shoeDetail))
            return
        }
        alertSwal("Has alcanzado el límite para el talle seleccionado")
    }



    return (
        <div>
        <div className={styles.container}>
            <Card title={shoeDetail.brand} className={styles.productCard}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <img
                            src={shoeDetail.image}
                            alt={shoeDetail.name}
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.detailsContainer}>
                        <h2>{shoeDetail.name}</h2>
                       
                        {
                            alreadyInCart ? 
                            <>
                                <h3>Este producto ya está en el carrito:</h3>
                                <Button 
                                    label="Añadir otro"
                                    icon="pi pi-plus"
                                    className={styles.styledButton}
                                    onClick={handleAddItem}
                                />
                                <span>Cantidad: {alreadyInCart.qty}</span>
                            </>
                            : <Button 
                                label="Añadir al carrito"
                                icon="pi pi-shopping-cart"
                                className={styles.styledButton}
                                onClick={() => {
                                    return shoeDetail.stock && shoeDetail.sizes.length ? handleAddToCart() : alertSwal("Lo sentimos, no hay stock de este producto en este momento")}}
                            />
                        }
                        <table className={styles.sneakerTable}>
                            <tbody>
                                <tr>
                                    <td className={styles.boldTd}>Marca</td>
                                    <td>{shoeDetail.brand}</td>
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Modelo</td>
                                    <td>{shoeDetail.name}</td>
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Precio</td>
                                    <td>$ {shoeDetail.price}</td>
                                </tr> 
                                <tr>
                                    <td className={styles.boldTd}>Talles</td>
                                    <Dropdown
                            value={selectedSize}
                            options={sizes}
                            onChange={(e) => setSelectedSize(e.value)}
                            placeholder="Selecciona un talle"
                            className={styles.sizeDropdown}
                        />
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Stock</td>
                                    <td>{ shoeDetail.stock ? "Sí" : "No" }</td>
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Género</td>
                                    <td>{shoeDetail.gender}</td>
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Deporte</td>
                                    <td>{shoeDetail.sport}</td>
                                </tr>
                                <tr>
                                    <td className={styles.boldTd}>Descripción</td>
                                    <td className={styles.description}>{shoeDetail.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <Review reviews={reviews} onSubmit={handleAddReview} /> */}
            </Card>
        </div>
    <div>
        <Footer></Footer>
    </div>
</div>
    );
}
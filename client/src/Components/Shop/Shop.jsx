import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./shop.module.css";
import { removeFromCart, addItem, takeItem } from "../../Redux/Actions";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { useState } from "react";
import alertSwal from "../../funcs/alertSwal"
import Footer from "../Footer/Footer"

export default function Shop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const loggedUserData = useSelector(state => state.loggedUserData)
    console.log(loggedUserData);
    console.log(cart)



    const itemTemplate = (product) => {
        return (
           
            <div className={styles.item}>
                 {console.log(product.item.size)}
                <img
                    src={product.item.image}
                    alt={product.item.name}
                    onClick={() => navigate(`/detail/${product.item.id}`)}
                />
                <div className={styles.itemDetails}>
                    <h2>{product.item.name}</h2>
                    <h3>Talle:{product.item.selectedSize}</h3>
                    <h3>Precio por unidad: ${product.item.price}</h3>
                    <div className={styles.cantidad}>
                        {product.qty > 1 ? (
                            <i className="pi pi-minus" onClick={() => dispatch(takeItem(product.item))}></i>
                        ) : (
                            <i className="pi pi-times" onClick={() => dispatch(removeFromCart(product.item))}></i>
                        )}
                        <h4>Cant: {product.qty}</h4>
                        <i className="pi pi-plus" onClick={() => dispatch(addItem(product.item))}></i>
                    </div>
                    <Button
                        label="QUITAR DEL CARRITO"
                        onClick={() => dispatch(removeFromCart(product.item))}
                        className="p-button-danger"
                    />
                    <h2>Subtotal: ${product.item.price * product.qty}</h2>
                </div>
            </div>
        );
    };

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.item.price * product.qty, 0);
    };

    const handleFinish = () => {
        if (!cart.length) {
            alertSwal("El carrito esta vacío")
            return
        }

        if (!loggedUserData.username) {
            alertSwal("Debes iniciar sesión para realizar una compra")
            navigate("/login")
            return
        }

        navigate("/checkout")
        return
    }

    return (
        <div>
        <div>
        <div className={styles.shopContainer}>
        {cart.length === 0 ? (
                <p className={styles.emptyMessage}>Tu carrito está vacío</p>
            ) : (
                <DataScroller
                    value={cart}
                    itemTemplate={itemTemplate}
                    rows={10}
                    inline
                    scrollHeight="500px"
                    className={styles.DataScroller}
                />
            )}
        </div>
        <div className={styles.totalContainer}>
                <p className={styles.totalText}>El total de tu compra es ${calculateTotal().toFixed(2)}</p>
                <Button
                    label="Finalizar Compra"
                    className={styles.buttonFinish}
                    onClick={() => handleFinish()} // Redirige a la página de checkout o realiza alguna acción
                />
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>

        </div>

    );
}
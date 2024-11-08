import React, { useState } from 'react';
import { Card, Button, InputText } from 'primereact';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from "../Orders/Orders.module.css";
import ordersMock from "../../../mockDB/mockOrders2";

const arrayOrders = [
    ...ordersMock,
    {
        id: 6,
        statuspago: "completado",
        statusenvio: "pendiente",
        fecha: "2024-08-23T13:42:15.610Z",
        total: 168000,
        shoes: [
            {
                id: 4,
                name: "Air Zoom G.t Jump 2",
                brand: "Nike",
                price: 220000,
                gender: "Hombre",
                sport: "Basketball",
                image: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457838/29_ors74d.jpg",
                description: "Zapatilla de entrenamiento",
                stock: true,
                enable: true,
                orderitem: {
                    orderid: 40,
                    shoeid: 29,
                    quantity: 1
                }
            }
        ]
    }
];

const Orders = () => {
    const [orders, setOrders] = useState(arrayOrders);
    const [trackingCode, setTrackingCode] = useState('');
    const [newOrder, setNewOrder] = useState({
        id: orders.length + 1,
        statuspago: 'completado',
        statusenvio: 'pendiente',
        fecha: '2024-08-23T13:42:15.610Z',
        total: 168000,
        shoes: [
            {
                id: 4,
                name: "Air Zoom G.t Jump 2",
                brand: "Nike",
                price: 220000,
                gender: "Hombre",
                sport: "Basketball",
                image: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457838/29_ors74d.jpg",
                description: "Zapatilla de entrenamiento",
                stock: true,
                enable: true,
                orderitem: {
                    orderid: 40,
                    shoeid: 29,
                    quantity: 1
                }
            }
        ]
    });

    const handleTrackingCodeChange = (e) => {
        setTrackingCode(e.target.value);
    };

    const handleSend = () => {
        // Agrega la nueva orden al principio de la lista de órdenes
        setOrders([newOrder, ...orders]);
        // Limpiar el estado de la nueva orden y el código de seguimiento después de agregarla
        setNewOrder({
            id: orders.length + 2, // Actualiza el ID para la próxima orden
            statuspago: 'completado',
            statusenvio: 'pendiente',
            fecha: new Date().toISOString(),
            total: 0,
            shoes: []
        });
        setTrackingCode('');
        // Aquí puedes agregar la lógica para enviar el código de seguimiento si es necesario
        console.log('Código de seguimiento enviado:', trackingCode);
    };

    return (
        <div className={styles.ordersContainer}>
            <h2>Órdenes</h2>
            {orders.map(order => (
                <Card key={order.id} title={`Orden #${order.id}`} className={styles.orderCard}>
                    <p><strong>Estado de Pago:</strong> {order.statuspago}</p>
                    <p><strong>Estado de Envío:</strong> {order.statusenvio}</p>
                    <p><strong>Fecha:</strong> {new Date(order.fecha).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> ${order.total}</p>
                    <div>
                        <h4>Zapatos:</h4>
                        {order.shoes.map(shoe => (
                            <div key={shoe.id} className={styles.shoeDetails}>
                                <img src={shoe.image} alt={shoe.name} className={styles.shoeImage} />
                                <p><strong>Nombre:</strong> {shoe.name}</p>
                                <p><strong>Marca:</strong> {shoe.brand}</p>
                                <p><strong>Precio:</strong> ${shoe.price}</p>
                                <p><strong>Cantidad:</strong> {shoe.orderitem.quantity}</p>
                            </div>
                        ))}
                    </div>
                    {order.statusenvio === 'pendiente' && (
                        <div className={styles.inputTrackingCode}>
                            <InputText
                                value={trackingCode}
                                onChange={handleTrackingCodeChange}
                                placeholder="Ingrese código de seguimiento"
                                className={styles.inputTrackingCode}
                            />
                            <Button
                                label="Enviar"
                                className={styles.buttonSend}
                                onClick={() => console.log('Código de seguimiento enviado:', trackingCode)}
                            />
                        </div>
                    )}
                </Card>
            ))}

            
        </div>
    );
};

export default Orders;

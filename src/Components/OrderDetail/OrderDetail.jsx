// import { useParams } from "react-router-dom"
// import arrayOrders from "../../mockDB/mockOrders2"
// import styles from "./OrderDetail.module.css"

// export default function OrderDetail () {

//     const {id} = useParams()
//     const order = arrayOrders.find(order => order.id === Number(id))
//     console.log(order)
//     return(
//         <div>
//             <h1>{`Orden #${id}`}</h1>
//             <div className={styles.DatosAndTable}>
//                 <div>
//                     <h3>{`Fecha: ${order?.fecha.slice(0,10)}`}</h3>
//                     <h3>Estado: {order.statuspago === "approved" && order.statusenvio === "entregado" ? "Cerrada" : "Abierta"}</h3>
//                     <h3>{`Pago: ${order?.statuspago}`}</h3>
//                     <h3>{`Envio: ${order?.statusenvio}`}</h3>
//                 </div>
//                 <div className={styles.TableAndTotal}>
//                     <div className={styles.TableColumns}>
//                         <div className={styles.ColumnsElements}>
//                             <h4>PRODUCTO</h4>
//                             {
//                                 order?.shoes.map(({name, image}) => {
//                                     return(
//                                         <div className={styles.Producto}>
//                                             <img src={image} alt={name} />
//                                             <p>{name}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className={styles.ColumnsElements}>
//                             <h4>PRECIO</h4>
//                             {
//                                 order?.shoes.map(({price}) => {
//                                     return(
//                                         <div>
//                                             <p>{price}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className={styles.ColumnsElements}>
//                             <h4>CANTIDAD</h4>
//                             {
//                                 order?.shoes.map(({orderitem: {quantity}}) => {
//                                     return(
//                                         <div>
//                                             <p>{quantity}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className={styles.ColumnsElements}>
//                             <h4>TOTAL</h4>
//                             {
//                                 order?.shoes.map(({orderitem, price}) => {
//                                     return(
//                                         <div>
//                                             <p>{price*orderitem.quantity}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                     <h2>{`Total: $${order?.total}`}</h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useParams } from "react-router-dom";
import arrayOrders from "../../mockDB/mockOrders2";
import styles from "./OrderDetail.module.css";
import Footer from "../Footer/Footer"

export default function OrderDetail() {
    const { id } = useParams();
    const order = arrayOrders.find(order => order.id === Number(id));

    return (
        <div className={styles.TitleAndAll}>
            <h1>{`Orden #${id}`}</h1>
            <div className={styles.DatosAndTable}>
                <div className={styles.SideData}>
                    <h3>{`Fecha: ${order?.fecha.slice(0, 10)}`}</h3>
                    <h3>
                        Estado: {order?.statuspago === "approved" && order?.statusenvio === "entregado" ? "Cerrada" : "Abierta"}
                    </h3>
                    <h3>{`Pago: ${order?.statuspago}`}</h3>
                    <h3>{`Envio: ${order?.statusenvio}`}</h3>
                </div>
                <div className={styles.TableAndTotal}>
                    <DataTable value={order?.shoes} className={styles.ProductTable}>
                        <Column field="name" header="Producto" body={(data) => (
                            <div className={styles.Producto}>
                                <img src={data.image} alt={data.name} className={styles.ProductImage} />
                                <p>{data.name}</p>
                            </div>
                        )} />
                        <Column field="price" header="Precio" body={(data) => (
                            <p>${data.price}</p>
                        )} />
                        <Column field="orderitem.quantity" header="Cantidad" body={(data) => (
                            <p>{data.orderitem.quantity}</p>
                        )} />
                        <Column header="Total" body={(data) => (
                            <p>${data.price * data.orderitem.quantity}</p>
                        )} />
                    </DataTable>
                    <h2>{`Total: $${order?.total}`}</h2>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

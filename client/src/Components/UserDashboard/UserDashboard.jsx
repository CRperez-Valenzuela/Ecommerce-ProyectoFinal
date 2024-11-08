import React from 'react';
import { logoutUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TabView, TabPanel } from 'primereact/tabview';
import Card2 from "../Card/Card2.jsx";
import UserConfig from "./userConfig.jsx";
import styles from "./UserDashboard.module.css";
import UserOrders from "./UserOrders.jsx";
import { Button } from "primereact/button";
import axios from "axios";
import Footer from "../Footer/Footer.jsx"

export default function UserDashboard() {
  const navigate = useNavigate();
  const loggedUserData = useSelector(state => state.loggedUserData);
  const dispatch = useDispatch();
  
  const logOut = () => {
    dispatch(logoutUser());
    navigate("/home");
  };
    
    console.log(loggedUserData);

    return (
        <div>
          <h2> Hola {loggedUserData.username}, bienvenido a tu panel de usuario:</h2>
          <TabView className={styles.tabView}>
          <TabPanel header="Lista de deseos">
      { !loggedUserData.wishList.length
        ? <h3>No hay zapatillas en tu lista de deseos</h3>
        : (
          <div className={styles.cardsContainer}>
            { loggedUserData.wishList.map(({ id, name, price, image, brand }) => (
              <div key={id} className={styles.card}>
                <Card2
                  id={id}
                  brand={brand}
                  name={name}
                  price={price}
                  image={image}
                />
              </div>
            )) }
          </div>
        )
      }
    </TabPanel>
            <TabPanel header="Historial de compras">
              <UserOrders></UserOrders>
            </TabPanel>
            <TabPanel header="Configuración">
              <UserConfig />
            </TabPanel>
          </TabView>
    
          {/* Contenedor para el botón de logout */}
          <div className={styles.logoutContainer}>
            <button className={styles.logoutButton} onClick={logOut}>
              LOG OUT
            </button>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      );
    }
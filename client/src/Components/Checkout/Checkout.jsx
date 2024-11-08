import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import styles from "./Checkout.module.css";
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import alertSwal from "../../funcs/alertSwal"
import { userInfoChange } from '../../Redux/Actions';

export default function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    initMercadoPago('APP_USR-1350f145-a406-4674-bd19-5a5799cec260', {
        locale: "es-AR"
    });

    const [preferenceId, setPreferenceId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState("");
    const cart = useSelector(state => state.cart);
    const loggedUserData = useSelector(state => state.loggedUserData);
console.log(loggedUserData)
    const items = cart.map(shoe => {
      return {
        title: shoe.item.name,
        quantity: shoe.qty,
        unit_price: shoe.item.price,
        id: shoe.item.id
      }
    })

    const createPreference = async () => {
        try {
            const response = await axios.post(`https://e-commerse-fc.onrender.com/api/createorder`, {
                items: items
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {

        if (shippingAddress === "") {
          alertSwal("Debes selecionar una dirección")
          return
        }

        Swal.fire({
            title: 'Cargando...',
            text: 'Estamos procesando tu pedido, por favor espera.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const id = await createPreference();
        if (id) {
            dispatch(userInfoChange(loggedUserData.id, {...loggedUserData, preference: id}))
            setPreferenceId(id);
            Swal.close();
        }

    };

    const itemTemplate = (product) => {
        return (
            <div className={styles.item}>
                <img
                    src={product.item.image}
                    alt={product.item.name}
                />
                <div className={styles.itemDetails}>
                    <h2>{product.item.name}</h2>
                    <h3>Precio por unidad: ${product.item.price}</h3>
                    <div className={styles.cantidad}>
                        <h4>Cant: {product.qty}</h4>
                    </div>
                    <h2>Subtotal: ${product.item.price * product.qty}</h2>
                </div>
            </div>
        );
    };

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.item.price * product.qty, 0);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setShippingAddress(isNaN(value) ? value : loggedUserData.addresses[value]);
    };

    useEffect(() => {
        console.log(shippingAddress);
    }, [shippingAddress]);

    return (
      <div className={styles.checkout}>
        <div className={styles.checkoutData}>
          <Panel header="DATOS DE CONTACTO" className={styles.panel}>
            <h5>Usuario:</h5>
            <p>{loggedUserData.username}</p>
            <h5>EMAIL</h5>
            <p>{loggedUserData.email}</p>
          </Panel>
          <Panel header="ENTREGA" className={styles.panel}>
            <div>
              <div className={styles.PairRadioLabel}>
                <RadioButton
                  inputId="Local"
                  name="ShippingAddress"
                  value="Local"
                  onChange={handleChange}
                  checked={shippingAddress === "Local"}
                />
                <label htmlFor="Local">
                  <div>
                    <h4>Retirar por Shopsport</h4>
                    <p>Calle FGH 456 - ShopCity, ShopProvince - ShopCountry</p>
                  </div>
                </label>
              </div>
              {!loggedUserData.addresses.length ? (
                <div className={styles.PairRadioLabel}>
                  <h4>Puedes añadir tus direcciones desde tu panel </h4>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <h4
                      style={{
                        color: "#ff0f0f",
                        fontSize: "1rem",
                        fontWeight: "bolder",
                        transition: "color 0.5s",
                      }}
                    >
                      Panel de Usuario
                    </h4>
                  </Link>
                  {/* <Button onClick={() => navigate("/dashboard") }className={styles.mpButton}>PANEL DE USUARIO</Button> */}
                </div>
              ) : (
                loggedUserData.addresses.map((address, index) => {
                  return (
                    <div className={styles.PairRadioLabel} key={index}>
                      <RadioButton
                        inputId={index}
                        name="ShippingAddress"
                        value={index}
                        onChange={handleChange}
                        checked={
                          shippingAddress === loggedUserData.addresses[index]
                        }
                      />
                      <label htmlFor={index}>
                        <h5>El pedido será enviado a:</h5>
                        <p>{`${address.direccion} - ${address.city}, ${address.province} - ${address.country}`}</p>
                      </label>
                    </div>
                  );
                })
              )}
            </div>
          </Panel>
          <Button onClick={handleBuy} className={styles.mpButton}>
            IR A PAGAR
          </Button>
          {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          )}
        </div>
        <div className={styles.cart}>
          <DataScroller
            value={cart}
            itemTemplate={itemTemplate}
            rows={10}
            inline
            scrollHeight="500px"
            className={styles.DataScroller}
          />
          <p className={styles.totalText}>
            El total de tu compra es ${calculateTotal().toFixed(2)}
          </p>
        </div>
      </div>
    );
}
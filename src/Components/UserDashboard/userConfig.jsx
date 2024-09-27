
import React, { useState } from 'react';
import alertSwal from "../../funcs/alertSwal";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useSelector, useDispatch } from 'react-redux';
import { userInfoChange, addAddress, deleteAddress, editAddress } from '../../Redux/Actions';
import styles from "./UserCongif.module.css";

export default function UserConfig() {
    const loggedUserData = useSelector(state => state.loggedUserData);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState({
        editing: false,
        index: -1
    });
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [userData, setUserData] = useState({
        username: loggedUserData.username,
        email: loggedUserData.email,
        addresses: loggedUserData.addresses
    });
    const [userDataAddresses, setUserDataAddresses] = useState({
        direccion: "",
        numberphone: "",
        codigopostal: "",
        ciudad: "",
        provincia: "",
        pais: ""
    });
    const [userDataEditAddresses, setUserDataEditAddresses] = useState({
        direccion: "",
        numberphone: "",
        codigopostal: "",
        ciudad: "",
        provincia: "",
        pais: ""
    });

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleClickAddress = (idx, addss) => {
        if (isEditingAddress.index < 0) {
            setIsEditingAddress({
                editing: true,
                index: idx
            });
            setUserDataEditAddresses({
                direccion: addss.direccion,
                numberphone: addss.numberphone,
                codigopostal: addss.codigopostal,
                ciudad: addss.ciudad,
                provincia: addss.provincia,
                pais: addss.pais
            });
        } else if (isEditingAddress.index === idx) {
            setIsEditingAddress({
                editing: false,
                index: -1
            });
            setUserDataEditAddresses({
                direccion: "",
                numberphone: "",
                codigopostal: "",
                ciudad: "",
                provincia: "",
                pais: ""
            });
        } else {
            alertSwal("Solo puedes editar una dirección por vez");
        }
    };

    const handleAddAddress = () => {
        setIsAddingAddress(!isAddingAddress);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleChangeAddress = (e) => {
        const { name, value } = e.target;
        setUserDataAddresses({
            ...userDataAddresses,
            [name]: value
        });
    };

    const handleChangeEditAddress = (e) => {
        const { name, value } = e.target;
        setUserDataEditAddresses({
            ...userDataEditAddresses,
            [name]: value
        });
    };

    const handleSave = () => {
        console.log(userData)
        dispatch(userInfoChange(loggedUserData.id, {email: userData.email, username: userData.username}));
        setIsEditing(false);
    };

    const handleSaveEditAddress = (index, address) => {
        dispatch(editAddress(index, address));
        setIsEditingAddress({
            editing: false,
            index: -1
        });
        setUserDataEditAddresses({
            direccion: "",
            numberphone: "",
            codigopostal: "",
            ciudad: "",
            provincia: "",
            pais: ""
        });
    };

    const handleSaveAddress = () => {
        const newUserDataAdresses = { ...userDataAddresses, userid: loggedUserData.id };
        console.log(newUserDataAdresses);
        
        dispatch(addAddress(newUserDataAdresses));
        setIsAddingAddress(!isAddingAddress);
        setUserDataAddresses({
            direccion: "",
            numberphone: "",
            codigopostal: "",
            ciudad: "",
            provincia: "",
            pais: ""
        });
    };

    const handleDeleteAddress = (idx) => {
        dispatch(deleteAddress(loggedUserData.addresses[idx].id));
    };

    return (
        <div>
            <Card title="Tus datos" className={styles.userInfoCard}>
                <h2>Usuario: {loggedUserData.username}</h2>
                <p>Email: {loggedUserData.email}</p>
                <Button onClick={handleClick} className={styles.button}>Cambia tu información</Button>
            </Card>

            {isEditing && (
                <Card title="Modificar Datos" className={styles.cardContainer}>
                    <label htmlFor="username">Usuario</label>
                    <InputText
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <Button onClick={handleSave}>Guardar</Button>
                </Card>
            )}

            <Card title="Tus direcciones" className={styles.addressCard}>
                <p>Dirección de envío: {!loggedUserData.addresses.length && "No tienes direcciones de envío registradas"}</p>
                {
                    loggedUserData.addresses?.map((address, idx) => {
                        const isBeingEdited = (isEditingAddress.index === idx);
                        return (
                            <div key={idx}>
                                {
                                    !isBeingEdited &&
                                    <div>
                                        <p>{address.direccion}</p>
                                        <p>{address.numberphone}</p>
                                        <p>{address.codigopostal}</p>
                                        <p>{address.ciudad}</p>
                                        <p>{address.provincia}</p>
                                        <p>{address.pais}</p>
                                    </div>
                                }
                                <Button onClick={() => handleClickAddress(idx, address)}>{isBeingEdited ? "Cancelar" : "Editar"}</Button>
                                <Button onClick={() => handleDeleteAddress(idx)}>Eliminar</Button>
                                {isEditingAddress.editing && isEditingAddress.index === idx && (
                                    <Card title="Modificar Dirección" className={styles.cardContainer}>
                                        <label htmlFor="direccion">Dirección</label>
                                        <InputText
                                            id="direccion"
                                            name="direccion"
                                            value={userDataEditAddresses.direccion}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <label htmlFor="numberphone">Teléfono</label>
                                        <InputText
                                            id="numberphone"
                                            name="numberphone"
                                            value={userDataEditAddresses.numberphone}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <label htmlFor="codigopostal">Código Postal</label>
                                        <InputText
                                            id="codigopostal"
                                            name="codigopostal"
                                            value={userDataEditAddresses.codigopostal}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <label htmlFor="ciudad">Ciudad</label>
                                        <InputText
                                            id="ciudad"
                                            name="ciudad"
                                            value={userDataEditAddresses.ciudad}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <label htmlFor="provincia">Provincia</label>
                                        <InputText
                                            id="provincia"
                                            name="provincia"
                                            value={userDataEditAddresses.provincia}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <label htmlFor="pais">País</label>
                                        <InputText
                                            id="pais"
                                            name="pais"
                                            value={userDataEditAddresses.pais}
                                            onChange={handleChangeEditAddress}
                                        />
                                        <Button onClick={() => handleSaveEditAddress(idx, userDataEditAddresses)} className={styles.button}>Guardar</Button>
                                    </Card>
                                )}
                            </div>
                        );
                    })
                }
                <Button onClick={handleAddAddress} className={styles.button}>Añadir Dirección</Button>
                {isAddingAddress && (
                    <Card title="Añadir Dirección" className={styles.cardContainer}>
                        <label htmlFor="direccion">Dirección</label>
                        <InputText
                            id="direccion"
                            name="direccion"
                            value={userDataAddresses.direccion}
                            onChange={handleChangeAddress}
                        />
                        <label htmlFor="numberphone">Teléfono</label>
                        <InputText
                            id="numberphone"
                            name="numberphone"
                            value={userDataAddresses.numberphone}
                            onChange={handleChangeAddress}
                        />
                        <label htmlFor="codigopostal">Código Postal</label>
                        <InputText
                            id="codigopostal"
                            name="codigopostal"
                            value={userDataAddresses.codigopostal}
                            onChange={handleChangeAddress}
                        />
                        <label htmlFor="ciudad">Ciudad</label>
                        <InputText
                            id="ciudad"
                            name="ciudad"
                            value={userDataAddresses.ciudad}
                            onChange={handleChangeAddress}
                        />
                        <label htmlFor="provincia">Provincia</label>
                        <InputText
                            id="provincia"
                            name="provincia"
                            value={userDataAddresses.provincia}
                            onChange={handleChangeAddress}
                        />
                        <label htmlFor="pais">País</label>
                        <InputText
                            id="pais"
                            name="pais"
                            value={userDataAddresses.pais}
                            onChange={handleChangeAddress}
                        />
                        <Button onClick={handleSaveAddress}>Guardar</Button>
                    </Card>
                )}
            </Card>
        </div>
    );
}

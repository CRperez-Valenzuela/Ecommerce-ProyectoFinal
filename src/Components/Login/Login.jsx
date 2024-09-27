import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode" // Corregido el nombre de la importación
import logIn from "../../mockDB/mockLogIn";
import { loginUser } from "../../Redux/Actions";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { GoogleLogin } from "@react-oauth/google";
import logoNav from "../../Assets/LogoNav.png";
import axios from "axios";
import alertSwal from "../../funcs/alertSwal";
import styles from "./Login.module.css";
import Footer from "../Footer/Footer";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await logIn(userData)
        .then(({ data: { token } }) => {
            const decodedToken = jwtDecode(token);
            return decodedToken;
        })
        .then(async ({ id }) => {
            const user = await axios(`http://localhost:3000/api/users/${id}`);
            return user;
        })
        .then(({ data }) => {
            // Verificar si el usuario está baneado
            if (data.ban) {
                alertSwal("Tu cuenta está baneada. No puedes iniciar sesión.", "error");
                return;
            }

            const userData = {
                ...data,
                wishList: data.wishList || [],
                shoppingHistory: data.shoppingHistory || [],
                email: data.email || "",
                addresses: data.addresses || []
            };
            dispatch(loginUser(userData));
            navigate("/home");
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    const handleLoginSuccess = async (response) => {
        try {
            await axios.post(`http://localhost:3000/api/auth/google`, {
                token: response.credential,
            })
            .then(({ data }) => {
                const { token } = data;
                const decodedToken = jwtDecode(token);
                return decodedToken;
            })
            .then(async ({ id }) => {
                const user = await axios(`http://localhost:3000/api/users/${id}`);
                return user;
            })
            .then(({ data }) => {
                // Verificar si el usuario está baneado
                if (data.ban) {
                    alertSwal("Tu cuenta está baneada. No puedes iniciar sesión.", "error");
                    return;
                }

                const userData = {
                    ...data,
                    wishList: !data.wishList ? [] : data.wishList,
                    shoppingHistory: !data.shoppingHistory ? [] : data.shoppingHistory
                };
                dispatch(loginUser(userData));
                alertSwal("Log in exitoso", "success");
                navigate("/home");
            });
        } catch (error) {
            console.error('Error al enviar el token al backend', error);
        }
    };

    const handleLoginFailure = (response) => {
        console.error('Error al iniciar sesión con Google', response);
    };

    return (
        <div className={styles.background}>
            <div className={styles.logInContainer}>
                <form onSubmit={handleSubmit} className="flex flex-column md:flex-row align-items-center justify-content-center">
                    <div className={styles.inputContainer}>
                        <img src={logoNav} alt="logo shopsport" className={styles.logo} />
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <InputText
                                id="email"
                                type="email"
                                name="email"
                                value={userData.email}
                                placeholder="Email"
                                className={styles.inputText}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="password" className={styles.label}>Contraseña</label>
                            <InputText
                                id="password"
                                type="password"
                                name="password"
                                value={userData.password}
                                placeholder="Contraseña"
                                className={styles.inputText}
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" label="Login" icon="pi pi-user" className={styles.button} />
                        <div className={styles.googleLogin}>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginFailure}
                                className={styles.googleButton}
                            />
                        </div>
                    </div>
                    <Divider align="center" className={styles.divider}>
                        <b>OR</b>
                    </Divider>
                    <div className={styles.signUpContainer}>
                        <Link to={"/signup"}>
                            <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className={styles.button} />
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
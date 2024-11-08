import axios from "axios";
import alertSwal from "../funcs/alertSwal";

export default async function logIn (userData) {

    const { email, password } = userData

    if (!email || !password) {
        alertSwal("Faltan campos por completar")
        return
    }

    try {
        console.log(userData);
        
        var existentUser = await axios.post(`http://backend:3000/api/auth/login`, userData)
        console.log(existentUser)
    } catch (error) {

        console.log(error)
        const {message} = error.response.data
        console.log(message)
        message === "Invalid email" ? alertSwal("Email no registrado") : alertSwal("Contraseña incorrecta")
        return
    }

    alertSwal("Log in exitoso")
    
    return (existentUser)
}
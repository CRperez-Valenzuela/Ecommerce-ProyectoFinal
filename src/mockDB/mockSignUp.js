import users from "./mockUserData"
import alertSwal from "../funcs/alertSwal"
import axios from "axios"

export default async function signUp (userData, errors) {

    const { email, password, passwordRepeat, username } = userData

    if (!email || !password || !passwordRepeat || !username) {
        alertSwal("Faltan campos por completar")
        return
    }
    
    const arrayErrors = Object.values(errors)
    const thereAreErrors = arrayErrors.find((error) => error !== "")

    if (thereAreErrors) {
        alertSwal("Completa los campos según las condiciones especificadas")
        return
    }

    const body = {username, email, password, isAdmin: false}

    try {
        var signupUser = await axios.post(`http://localhost:3000/api/users/register`, body)
        console.log(signupUser)
    } catch ({response: {data}}) {
        const {message} = data

        if (message === "Already registered email") {
            alertSwal("Este email ya está registrado")
        }

        return
    }

    console.log(signupUser);
    
    alertSwal("Registro exitoso")

    return ("flag")
}


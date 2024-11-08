import users from "./mockUserData"
import alertSwal from "../funcs/alertSwal"
import axios from "axios"

export default async function signUp (userData, errors) {

    const { username, email, password, passwordRepeat } = userData
  
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

    const body = {username: userData.username,
        email: userData.email,
        password: userData.password,
        isAdmin: false,
        ban: false,
        preference: false
        }
 
        
    try {
        
        var signupUser = await axios.post(`http://backend:3000/api/register`, body)
        
    } catch ({response: {data}}) {
        const {message} = data
        console.log (data)
        if (message === "Already registered email") {
            alertSwal("Este email ya está registrado")
        }

        return
    }

    console.log(signupUser);
    
    alertSwal("Registro exitoso")

    return ("flag")
}


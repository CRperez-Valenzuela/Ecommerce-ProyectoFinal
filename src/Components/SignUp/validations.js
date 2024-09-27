
export default function validation(userData, setErrors, errors, propiedad) {

    if (propiedad === "username") {
        if(!userData.username) {
            setErrors({...errors, username: "Debe completar este campo"})
        } else if(userData.username.length < 4 || userData.username.length > 20) {
            setErrors({...errors, username: "El nombre de usuario debe tener entre 4 y 20 carácteres"})
        } else {
            setErrors({...errors, username: ""})
        }
    }

    if (propiedad === "email") {
        if (!userData.email) {
            setErrors({...errors, email: "Debe completar este campo"})
        } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
            setErrors({...errors, email: ""})
        } else {
            setErrors({...errors, email: "Email no válido"})
        }
    }

    if (propiedad === "password") {
        if(!userData.password) {
            setErrors({...errors, password: "Debe completar este campo"})
        } else if(userData.password.length < 6 || userData.password.length > 10) {
            setErrors({...errors, password: "La contraseña debe tener entre 6 y 10 carácteres"})
        } else if ((/\d/.test(userData.password))) {
            setErrors({...errors, password: ""})
        } else setErrors({...errors, password: "La contraseña debe contener al menos un número"})
    }

    if (propiedad === "passwordRepeat") {
        if (!userData.passwordRepeat) {
            setErrors({...errors, passwordRepeat: "Debe completar este campo"})
        } else if (userData.password !== userData.passwordRepeat){
            setErrors({...errors, passwordRepeat: "Las contraseñas deben coincidir"})
        } else setErrors({...errors, passwordRepeat: ""})
    }
       
    return 
}
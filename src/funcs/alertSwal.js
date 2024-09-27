import Swal from "sweetalert2"

export default function alertSwal(alertText) {
    return (
    Swal.fire({
        title: alertText,
        showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    })
 )
}
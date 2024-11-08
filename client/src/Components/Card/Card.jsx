import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getShoeById } from "../../Redux/Actions";
import styles from "./Card.module.css";
import "primeicons/primeicons.css"

export default function Card({ id, name, price, image, brand }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUserData = useSelector(state => state.loggedUserData)

    const handleClick = () => {
        console.log("Clicked ID:", id); // Verifica si el ID es undefined
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    return (
        <div className={styles.Card}>
            {
                loggedUserData.username && !loggedUserData.isAdmin &&
                <>
                    <span className="pi pi-bookmark"></span>
                    <span className="pi pi-bookmark-fill"></span>
                </>
            }
            <img src={image} alt={name} onClick={handleClick} />
            <p onClick={handleClick}>{brand}</p>
            <p onClick={handleClick}>{name}</p>
            <p>${price}</p>
            <button onClick={handleClick}>Ir al detalle</button>
            <br />
        </div>
    );
}
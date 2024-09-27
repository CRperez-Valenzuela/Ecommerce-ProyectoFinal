import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import Card2 from "../Card/Card2"
import Footer from "../Footer/Footer";

export default function Search() {
    const searchedShoes = useSelector(state => state.searchedShoes);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
            <div>

           
        <div className={styles.cardSearch}>
            {searchedShoes.length === 0 ? (
                <p>No se encontraron productos.</p>
            ) : (
                searchedShoes.map(({ id, name, price, image, brand }) => (
                    <div key={id} onClick={() => handleClick(id)}>
                        <Card2
                            id={id}
                            brand={brand}
                            name={name}
                            price={price}
                            image={image}
                        />
                    </div>
                ))
            )}
        </div>
        <div>

            <Footer></Footer>
        </div>
        </div>
    );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { FaSearch } from 'react-icons/fa';
import styles from "./SearchBar.module.css";
import { searchShoes } from "../../Redux/Actions";

export default function SearchBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [searchShoe, setSearchShoe] = useState('');

    const handleChange = (event) => {
        setSearchShoe(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchShoes(searchShoe));
        navigate(`/search?query=${encodeURIComponent(searchShoe)}`);
    };

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchbar}>
                {isSearchBarVisible && (
                    <InputText
                        className={styles.searchInput}
                        placeholder="Buscar..."
                        value={searchShoe}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                )}
                <Button
                    icon={<FaSearch />}
                    className={styles.transparentIcon}
                    onClick={toggleSearchBar}
                />
            </div>
        </div>
    );
}
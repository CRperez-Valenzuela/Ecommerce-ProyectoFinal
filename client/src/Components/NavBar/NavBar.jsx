import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";
import LogoNav from "../../Assets/LogoNav.png";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { Button } from 'primereact/button';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const loggedUserData = useSelector(state => state.loggedUserData);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img 
                    src={LogoNav} 
                    alt="logo" 
                    onClick={() => navigate("/home")} 
                />
            </div>
            
            <div className={`${styles.navbarActions} ${menuOpen ? styles.show : ''}`}>
                <SearchBar />
                <Button 
                    icon={<FaUser />} 
                    className={styles.transparentIcon} 
                    onClick={() => {
                        return loggedUserData.username ? navigate("/dashboard") : navigate("/login");
                    }}
                />
                {!loggedUserData.isAdmin && (
                    <Button 
                        icon={<FaShoppingCart />} 
                        className={styles.transparentIcon} 
                        onClick={() => navigate("/shop")}
                    />
                )}
            </div>

            <div 
                className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`} 
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;

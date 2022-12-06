import React from "react";
import SearchBar from "./SearchBar";
import styles from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
    return (
        <div className={styles.contenedor}>
            <SearchBar onSearch={onSearch} />
            <NavLink to="/home" className={styles.link}>
                Inicio
            </NavLink>
            <NavLink to="/favoritos" className={styles.link}>
                Favoritos
            </NavLink>
            <NavLink to="/about" className={styles.link}>
                Acerca
            </NavLink>
            <NavLink to="/" className={styles.linkOut} onClick={logout}>
                logOut
            </NavLink>
            <img
                className={styles.imagen}
                src="https://www.eltiomediafire.com/store/wp-content/uploads/2021/07/pocket-mortys.png"
                alt="Logo Rick y Morty"
            />
        </div>
    );
};

export default Nav;

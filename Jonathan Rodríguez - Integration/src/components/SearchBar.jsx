import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar(props) {
    const [character, setCharacter] = useState("");
    const { onSearch } = props;

    const handleChange = (e) => {
        setCharacter(e.target.value);
    };

    return (
        <div className={styles.contenedor}>
            <div className={styles.busquedaContenedor}>
                <input
                    className={styles.busqueda}
                    type="search"
                    value={character}
                    onChange={handleChange}
                    placeholder="Buscar..."
                />
                <button
                    className={styles.boton}
                    onClick={() => onSearch(character)}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
}

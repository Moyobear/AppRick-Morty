import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/Detail.module.css";

const Detail = () => {
    const { detailId } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    function handleClick() {
        navigate("/home");
    }

    return (
        <div className={styles.padre}>
            <button className={styles.botonDetalles} onClick={handleClick}>
                Atrás
            </button>
            {character ? (
                <div className={styles.contenedorDetalles}>
                    <div className={styles.contenedorInfo}>
                        <h2 className={styles.nombre}>
                            Nombre: {character.name}
                        </h2>
                        <h5>Status: {character.status}</h5>
                        <h5>Especie: {character.species}</h5>
                        <h5>Genero: {character.gender}</h5>
                        <h5>Origen: {character.origin?.name}</h5>
                    </div>
                    <div>
                        <img
                            className={styles.imgDetalles}
                            src={character.image}
                            alt={character.name}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Detail;

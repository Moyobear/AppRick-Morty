import React, { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter, deleteCharacter } from "../redux/actions";

export function Card(props) {
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            props.deleteCharacter(props.id);
        } else {
            setIsFav(true);
            props.addCharacter(props);
        }
    };

    useEffect(() => {
        props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.myFavorites]);

    return (
        <div>
            <div className={styles.contenedorCard}>
                {isFav ? (
                    <button onClick={handleFavorite} className={styles.favOn}>
                        ❤️
                    </button>
                ) : (
                    <button onClick={handleFavorite} className={styles.favOff}>
                        🤍
                    </button>
                )}
                <img
                    className={styles.imgCard}
                    src={props.image}
                    alt="Imagen personaje"
                />
                <div className={styles.titulos}>
                    <NavLink to={`/detail/${props.id}`} className={styles.link}>
                        <h2 className={styles.nombre}>{props.name}</h2>
                    </NavLink>
                    <h2 className={styles.h2Texto}>{props.species}</h2>
                    <h2 className={styles.h2Texto}>{props.gender}</h2>
                </div>

                <button
                    className={styles.boton}
                    onClick={() => props.onClose(props.name)}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addCharacter: (character) => dispatch(addCharacter(character)),
        deleteCharacter: (id) => dispatch(deleteCharacter(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

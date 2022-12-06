import React from "react";
import { connect, useDispatch } from "react-redux";
import styles from "../styles/Favorites.module.css";
import { animateScroll as scroll } from "react-scroll";
import { filterCards, orderCards } from "../redux/actions";
import { log } from "@11ty/eleventy/src/EleventyErrorHandler";

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    function scrollToTop() {
        scroll.scrollToTop();
    }

    function handleClick(e) {
        const { name, value } = e.target;
        if (name === "order") dispatch(orderCards(value));
        if (name === "gender") dispatch(filterCards(value));
    }

    // function handleOrder(e) {}

    return (
        <div>
            <div className={styles.selectores}>
                <select
                    name="order"
                    className={styles.selector1}
                    onClick={handleClick}
                >
                    <option value="" disabled>
                        Ordenar...
                    </option>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
                <select
                    name="gender"
                    className={styles.selector2}
                    onClick={handleClick}
                >
                    <option value="" disabled>
                        Filtrar...
                    </option>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknow</option>
                </select>
            </div>
            <div className={styles.padre}>
                <div className={styles.contenedorFavoritos}>
                    {console.log(myFavorites)}
                    {myFavorites?.map((fav, index) => {
                        return (
                            <div key={index} className={styles.favorito}>
                                <h3 className={styles.name}>
                                    {fav.name} - {fav.id}
                                </h3>
                                <h4 className={styles.name}>{fav.gender}</h4>
                                <img
                                    src={fav.image}
                                    alt="imagen"
                                    className={styles.image}
                                />
                            </div>
                        );
                    })}
                </div>
                <button onClick={scrollToTop} className={styles.arriba}>
                    Arriba
                </button>
            </div>
        </div>
    );
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);

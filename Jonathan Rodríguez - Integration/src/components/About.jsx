import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.contenedor}>
            <h1>Bienvenidos a mi App de Rick and Morty</h1>
            <h2 className={styles.creador}>Creado por Jonathan Rodriguez</h2>
        </div>
    );
};

export default About;

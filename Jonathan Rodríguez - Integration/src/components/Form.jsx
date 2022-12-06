import React from "react";
import styles from "../styles/Form.module.css";
import { validation } from "./validation";

const Form = ({ login }) => {
    const [userData, setUserData] = React.useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = React.useState({
        username: "",
        password: "",
    });

    function handleInputChange(e) {
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value,
            })
        );

        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const arrayErrors = Object.values(errors);
        if (arrayErrors.length === 0) {
            setUserData({
                name: "",
                email: "",
                phone: 0,
                subject: "",
                message: "",
            });

            setErrors({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        }
        login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.contenedorForm}>
                <div className={styles.grupo}>
                    <label htmlFor="username" className={styles.label}>
                        Username:
                    </label>
                    <input
                        id="username"
                        className={errors.username && styles.warning}
                        onChange={handleInputChange}
                        value={userData.username}
                        name="username"
                        type="text"
                        required
                    />
                    {errors.username && (
                        <p className={styles.danger}>{errors.username}</p>
                    )}
                </div>

                <div className={styles.grupo}>
                    <label htmlFor="password" className={styles.label}>
                        Password:
                    </label>
                    <input
                        id="password"
                        className={errors.password && styles.warning}
                        onChange={handleInputChange}
                        value={userData.password}
                        name="password"
                        type="password"
                        required
                    />
                    {errors.password && (
                        <p className={styles.danger}>{errors.password}</p>
                    )}
                </div>

                <button type="submit" className={styles.boton}>
                    LogIn
                </button>
            </form>
        </div>
    );
};

export default Form;

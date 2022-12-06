import { useEffect, useState } from "react";
import "../src/styles/App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import styles from "./styles/App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const username = "cualquiercosa@ejemplo.com";
    const password = "contraseñax123456";

    useEffect(() => {
        !access && navigate("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access]);

    function login(userData) {
        if (userData.username === username && userData.password === password) {
            setAccess(true);
            navigate("/home");
        }
    }

    function logout(access) {
        setAccess(false);
    }

    function onSearch(character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    }

    function onClose(e) {
        setCharacters(characters.filter((char) => char.name !== e));
    }

    return (
        <div className={location.pathname !== "/" ? "App" : null}>
            {location.pathname !== "/" ? (
                <div>
                    <Nav onSearch={onSearch} logout={logout} />
                </div>
            ) : null}
            <div
                className={location.pathname !== "/" ? styles.personajes : null}
            >
                <Routes>
                    <Route path="/" element={<Form login={login} />} />
                    <Route
                        path="/home"
                        element={
                            <Cards characters={characters} onClose={onClose} />
                        }
                    />
                    <Route exact path="/about" element={<About />} />
                    <Route
                        exact
                        path="/detail/:detailId"
                        element={<Detail />}
                    />
                    <Route path="/favoritos" element={<Favorites />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

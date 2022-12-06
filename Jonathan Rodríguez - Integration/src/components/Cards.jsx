import Card from "./Card";
import styles from "../styles/Cards.module.css";

export default function Cards(props) {
    const { characters } = props;
    return (
        <div className={styles.contenedor}>
            {characters.map((person, index) => (
                <Card
                    key={index}
                    id={person.id}
                    name={person.name}
                    gender={person.gender}
                    species={person.species}
                    image={person.image}
                    onClose={props.onClose}
                />
            ))}
        </div>
    );
}

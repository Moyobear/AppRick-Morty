import {
    ADD_CHARACTER,
    DELETE_CHARACTER,
    ORDER_CARDS,
    FILTER_CARDS,
} from "./types";

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character,
    };
};
export const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender,
    };
};
export const orderCards = (id) => {
    return {
        type: ORDER_CARDS,
        payload: id,
    };
};
export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    };
};

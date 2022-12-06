import {
    ADD_CHARACTER,
    DELETE_CHARACTER,
    ORDER_CARDS,
    FILTER_CARDS,
} from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            };
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case FILTER_CARDS:
            const filterCopy = [...state.allCharacters];
            const filter =
                action.payload === "All"
                    ? state.allCharacters
                    : filterCopy.filter(
                          (item) => item.gender === action.payload
                      );
            return {
                ...state,
                myFavorites: filter,
            };
        case ORDER_CARDS:
            const orderCharacters = [...state.allCharacters];
            if (action.payload === "ascendente")
                orderCharacters.sort((a, b) => a.id - b.id);
            if (action.payload === "descendente")
                orderCharacters.sort((a, b) => b.id - a.id);
            return {
                ...state,
                myFavorites: orderCharacters,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;

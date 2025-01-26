import * as ActionType from '../Actions/ActionsTypes';

const initial_state = [];

const ReducerCart = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload]; // Ajoute le parfum au panier
        case "REMOVE_FROM_CART":
            // Garde uniquement les parfums qui n'ont pas le même nom que celui à supprimer
            return state.filter((item) => item.name !== action.payload); 
        default:
            return state;
    }
};

export default ReducerCart;


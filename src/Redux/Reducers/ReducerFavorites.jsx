import * as ActionType from "../Actions/ActionsTypes";

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      // On vérifie si le parfum existe déjà dans les favoris avant de l'ajouter
      return state.some((item) => item.name === action.payload.name)
        ? state
        : [...state, action.payload]; // Si déjà dans les favoris, ne rien faire, sinon on l'ajoute
    case "REMOVE_FROM_FAVORITES":
      return state.filter((item) => item.name !== action.payload); // Supprime le parfum en utilisant `name`
    default:
      return state;
  }
};

export default favoritesReducer;


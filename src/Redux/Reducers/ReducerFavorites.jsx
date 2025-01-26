import * as ActionType from "../Actions/ActionsTypes";

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      
      return state.some((item) => item.name === action.payload.name)
        ? state
        : [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      return state.filter((item) => item.name !== action.payload); 
    default:
      return state;
  }
};

export default favoritesReducer;


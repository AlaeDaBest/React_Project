import { combineReducers } from "redux";
import ReducerFragrance from "./Reducers/ReducerFragrance";
import ReducerFavorites from "./Reducers/ReducerFavorites";
import ReducerCart from "./Reducers/ReducerCart";
const rootReducer=combineReducers({
    fragrances:ReducerFragrance,
    favorites:ReducerFavorites,
    cart:ReducerCart
})
export default rootReducer;
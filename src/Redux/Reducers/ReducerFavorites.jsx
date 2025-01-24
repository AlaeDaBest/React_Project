import * as ActionType from '../Actions/ActionsTypes';
const initial_state=[];
const ReducerFavorites=(state=initial_state,action)=>{
    let newState=initial_state;
    switch(action.type){
        case ActionType.ADD_TO_FAVORITES:
            newState=[...state,action.payload];
        break;
        case ActionType.REMOVE_FROM_FAVORITES:
            newState=state.filter((item)=>item.name!=action.payload);
        break;
    }
    return newState;
}
export default ReducerFavorites;
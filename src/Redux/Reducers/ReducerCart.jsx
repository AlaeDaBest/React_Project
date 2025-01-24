import * as ActionType from '../Actions/ActionsTypes';
const initial_state=[];
const ReducerCart=(state=initial_state,action)=>{
    let newState=initial_state;
    switch(action.type){
        case ActionType.ADD_TO_CART:
            newState=[...state,action.payload];
        break;
        case ActionType.REMOVE_FROM_CART:
            newState=state.filter((item)=>item.id!=action.payload);
        break;
    }
    return newState;
}
export default ReducerCart;
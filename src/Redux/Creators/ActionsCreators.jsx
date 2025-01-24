import * as ActionType from '../Actions/ActionsTypes';
export const add_fragrance=(fragrance)=>{
    return{
        type:ActionType.ADD_FRAGRANCE,
        payload:fragrance
    }
} 
export const delete_fragrance=(id)=>{
    return{
        type:ActionType.DELETE_FRAGRANCE,
        payload:id
    }
}
export const edit_fragrance=(id,newFragrance)=>{
    return{
        type:ActionType.EDIT_FRAGRANCE,
        payload:{id,newFragrance}
    }
}
export const add_to_favorites=(fragrance)=>{
    return{
        type:ActionType.ADD_TO_FAVORITES,
        payload:{fragrance}
    }
}
export const remove_from_favorites=(name)=>{
    return{
        type:ActionType.REMOVE_FROM_FAVORITES,
        payload:name
    }
}
export const add_to_cart=(fragrance)=>{
    return{
        type:ActionType.ADD_TO_CART,
        payload:fragrance
    }
}
export const remove_from_cart=(id)=>{
    return{
        type:ActionType.REMOVE_FROM_CART,
        payload:id
    }
}
export const search_by_sex=(sex)=>{
    return{
        type:ActionType.SEARCH_BY_SEX,
        payload:sex
    }
}
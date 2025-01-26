import * as ActionType from '../Actions/ActionsTypes';
export const add_fragrance=(fragrance)=>{
    return{
        type:ActionType.ADD_FRAGRANCE,
        payload:fragrance
    }
} 
export const delete_fragrance = (name) => {
    return {
        type: ActionType.DELETE_FRAGRANCE,
        payload: name,
    };
};
export const edit_fragrance = (name, newFragrance) => {
    return {
        type: ActionType.EDIT_FRAGRANCE,
        payload: { name, newFragrance }
    };
};






export const add_to_favorites = (fragrance) => {
    return {
      type: "ADD_TO_FAVORITES",
      payload: fragrance, 
    };
  };
  
  export const remove_from_favorites = (name) => {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: name, 
    };
  };
  
  
  
  

  export const add_to_cart = (fragrance) => {
    return {
        type: "ADD_TO_CART",
        payload: fragrance, // L'objet complet du parfum
    };
};

export const remove_from_cart = (name) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: name, // Nom du parfum à supprimer
    };
};

export const search_by_sex=(sex)=>{
    return{
        type:ActionType.SEARCH_BY_SEX,
        payload:sex
    }
}

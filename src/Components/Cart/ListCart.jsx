import React from "react";
import { useSelector } from "react-redux";
const ListCart=()=>{
    const cart=useSelector(state=>state.cart);
    console.log(cart)
    return(
        <div></div>
    )
}
export default ListCart;
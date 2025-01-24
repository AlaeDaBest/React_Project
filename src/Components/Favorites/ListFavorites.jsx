import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Home/Header";
const ListFavorites=()=>{
    const favorites=useSelector((state)=>state.favorites);
    const dispatch=useDispatch();
    console.log(favorites)
    return(
        <div>
            <Header/>
        </div>
    )
}
export default ListFavorites;
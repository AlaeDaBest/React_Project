import React, { useState } from "react";
import HeartIcon from "./Icons/HeartIcon";
import { useDispatch } from "react-redux";
import * as ActionCreator from "../../Redux/Creators/ActionsCreators";
const Fragrance=(props)=>{
    const [hidden,setHidden]=useState(true);
    const dispatch=useDispatch();
    return(
        <section className="Card" onClick={()=>setHidden(!hidden)}>
            <section className="ImageSection">
                <HeartIcon fragrance={props.fragrance} />
                <img src={props.fragrance.picture} width="200px" height="150px" alt="" />
            </section>
            <section className={`BookInfo ${hidden?'hidden':''}`} hidden={hidden} >
                <section>
                    <h3>{props.fragrance.name} </h3>
                    <p><span>Brand:</span>{props.fragrance.brand} </p>
                    <p><span>ReleaseYear:</span> {props.fragrance.release_date}</p>
                    <p><span>Genre:</span>{props.fragrance.genre}</p>
                    <p><span>Sex:</span> {props.fragrance.sex}</p>
                    <p><span>Prix:</span> {props.fragrance.price}</p>
                    <input type="button" value="Add To Cart" onClick={()=>dispatch(ActionCreator.add_to_cart(props.fragrance))} />
                </section>         
            </section>
        </section>
    )
}
export default Fragrance;
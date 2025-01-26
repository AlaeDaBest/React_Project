import React, { useState } from "react";
import HeartIcon from "./Icons/HeartIcon";
import { useDispatch } from "react-redux";
import * as ActionCreator from "../../Redux/Creators/ActionsCreators";
import EditFragrance from "./EditFrafrance"; 

const Fragrance = (props) => {
    const [hidden, setHidden] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); 
    const [isEditing, setIsEditing] = useState(false); 
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(ActionCreator.add_to_cart(props.fragrance));
        setIsButtonDisabled(true); 
    };

    const handleEdit = () => {
        setIsEditing(true); // Ouvre le formulaire d'édition
    };

    const handleDelete = () => {
        dispatch(ActionCreator.delete_fragrance(props.fragrance.name)); 
    };

    return (
        <section className="Card" onClick={() => setHidden(!hidden)}>
            <section className="ImageSection">
                <HeartIcon fragrance={props.fragrance} />
                <img src={props.fragrance.picture} width="200px" height="150px" alt="" />
            </section>
            <section className={`BookInfo ${hidden ? "hidden" : ""}`} hidden={hidden}>
                <section>
                    <h3>{props.fragrance.name}</h3>
                    <p>
                        <span>Brand:</span> {props.fragrance.brand}
                    </p>
                    <p>
                        <span>Release Date:</span> {props.fragrance.release_date}
                    </p>
                    <p>
                        <span>Genre:</span> {props.fragrance.genre}
                    </p>
                    <p>
                        <span>Sex:</span> {props.fragrance.sex}
                    </p>
                    <p>
                        <span>Price:</span> {props.fragrance.price}
                    </p>

                    <input
                        type="button"
                        value={isButtonDisabled ? "Added to Cart" : "Add To Cart"} 
                        onClick={handleAddToCart}
                        disabled={isButtonDisabled} // Désactive après clic
                        style={{
                            backgroundColor: isButtonDisabled ? "#bf9345" : "#dea74a",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            cursor: isButtonDisabled ? "not-allowed" : "pointer",
                            borderRadius: "5px",
                        }}
                    />
                    <button
                        onClick={handleEdit}
                        style={{
                            marginTop: "10px",
                            backgroundColor: "#dea74a",
                            color: "white",
                            padding: "8px 12px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        style={{
                            marginTop: "10px",
                            backgroundColor: "#bf9345",
                            color: "white",
                            padding: "8px 12px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Delete
                    </button>
                </section>
            </section>

            {isEditing && (
                <EditFragrance
                    fragrance={props.fragrance}
                    onClose={() => setIsEditing(false)} // Ferme le formulaire d'édition
                />
            )}
        </section>
    );
};

export default Fragrance;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Home/Header";
import Fragrance from "../Fragrances/Fragrance";
import { remove_from_cart } from "../../Redux/Creators/ActionsCreators";

const ListCart = () => {
  const cart = useSelector((state) => state.cart); // Les articles du panier
  const dispatch = useDispatch();

  const handleRemove = (name) => {
    dispatch(remove_from_cart(name)); // Supprime un parfum spécifique
  };

  return (
    <div>
      <Header />
      <h1>Your Cart</h1>
      <div id="CardGlobal">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((fragrance) => (
            <div key={fragrance.name}>
              <Fragrance fragrance={fragrance} />
              <button
                onClick={() => handleRemove(fragrance.name)}
                className="RemoveButton"
              >
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListCart;

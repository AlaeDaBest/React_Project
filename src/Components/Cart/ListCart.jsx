import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Home/Header";
import Fragrance from "../Fragrances/Fragrance";
import { remove_from_cart } from "../../Redux/Creators/ActionsCreators";
import Footer from "../Home/Footer";

const ListCart = () => {
  const cart = useSelector((state) => state.cart); // Les articles du panier
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculer l'index du premier et du dernier élément à afficher pour la page courante
  const indexOfLastFragrance = currentPage * itemsPerPage;
  const indexOfFirstFragrance = indexOfLastFragrance - itemsPerPage;

  // Diviser le panier en pages
  const currentCart = cart.slice(indexOfFirstFragrance, indexOfLastFragrance);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(cart.length / itemsPerPage);

  const handleRemove = (name) => {
    dispatch(remove_from_cart(name)); // Supprime un parfum spécifique
  };

  return (
    <div className="body">
      <Header />
      <h1 className="title">Your Cart</h1>
      <div id="CardGlobal">
        {currentCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          currentCart.map((fragrance) => (
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

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Prev
        </button>
        <span className="pagination-info">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default ListCart;

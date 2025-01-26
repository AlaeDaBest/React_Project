import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Fragrance from "../Fragrances/Fragrance";
import Footer from "../Home/Footer";

const ListFavorites = () => {
  const favorites = useSelector((state) => state.favorites); // Les favoris du store Redux
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculer l'index du premier et du dernier élément à afficher pour la page courante
  const indexOfLastFragrance = currentPage * itemsPerPage;
  const indexOfFirstFragrance = indexOfLastFragrance - itemsPerPage;

  // Diviser les favoris en pages
  const currentFavorites = favorites.slice(indexOfFirstFragrance, indexOfLastFragrance);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  return (
    <div className="body">
      <Header />
      <h1 className="title">Favorites</h1>
      <div id="CardGlobal">
        {currentFavorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          currentFavorites.map((fragrance) => (
            <div key={fragrance.id}>
              <Fragrance fragrance={fragrance} isInFavoritesPage={true} />
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

export default ListFavorites;

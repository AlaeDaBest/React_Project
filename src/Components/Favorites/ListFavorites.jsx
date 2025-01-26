import React from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Fragrance from "../Fragrances/Fragrance";

const ListFavorites = () => {
  const favorites = useSelector((state) => state.favorites); // Les favoris du store Redux

  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      <div id="CardGlobal">
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((fragrance) => (
            <div key={fragrance.id}>
              <Fragrance fragrance={fragrance} isInFavoritesPage={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListFavorites;

import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { add_to_favorites, remove_from_favorites } from "../../../Redux/Creators/ActionsCreators";

const HeartIcon = ({ fragrance }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites); // On récupère les favoris depuis Redux

  // Vérifie si le parfum est déjà dans les favoris en utilisant le `name`
  const isFavorite = favorites.some((item) => item.name === fragrance.name);

  const toggleLike = () => {
    if (isFavorite) {
      // Si le parfum est déjà dans les favoris, on le supprime
      dispatch(remove_from_favorites(fragrance.name)); // On utilise `name` pour identifier l'élément
    } else {
      // Sinon on l'ajoute
      dispatch(add_to_favorites(fragrance));
    }
  };

  return (
    <div onClick={toggleLike}>
      {isFavorite ? (
        <AiFillHeart color="black" size={24} />
      ) : (
        <AiOutlineHeart color="black" size={24} />
      )}
    </div>
  );
};

export default HeartIcon;

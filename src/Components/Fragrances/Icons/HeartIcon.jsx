import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { add_to_favorites, remove_from_favorites } from "../../../Redux/Creators/ActionsCreators";

const HeartIcon = ({ fragrance }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);


  const isFavorite = favorites.some((item) => item.name === fragrance.name);

  const toggleLike = () => {
    if (isFavorite) {
    
      dispatch(remove_from_favorites(fragrance.name));
    } else {
   
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

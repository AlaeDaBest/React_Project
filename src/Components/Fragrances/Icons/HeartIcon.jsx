import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import * as ActionCreator from '../../../Redux/Creators/ActionsCreators';
const HeartIcon = (props) => {
  const [liked, setLiked] = useState(false);
  const dispatch=useDispatch();
  const toggleLike = () => {
    setLiked((prev) => !prev);
    if (!liked) {
      dispatch(ActionCreator.add_to_favorites(props.fragrance));
    } else {
      dispatch(ActionCreator.remove_from_favorites(props.fragrance.name));
    }
  }
  return (
    <div onClick={toggleLike}>
      {liked ? (
        <AiFillHeart color="black" size={24} />
      ) : (
        <AiOutlineHeart color="black" size={24} />
      )}
    </div>
  );
};

export default HeartIcon;

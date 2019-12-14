import React, { useState } from "react";
import PropTypes from "prop-types";
import { dispatchLikeGif, dispatchUnlikeGif } from "../redux/dispatcher";
import { store } from "../redux/store";

const LikeButton = ({ url, id, weirdnessValue, setLikedGifs }) => {
  const [isLiked, setIsLiked] = useState(id in store.getState());

  const likedGifs = Object.keys(store.getState()).map(id => {
    const { url, weirdnessValue } = store.getState();
    return { id, weirdnessValue, url };
  });

  const handleLike = () => {
    setIsLiked(true);
    dispatchLikeGif(id, url, weirdnessValue);
    return setLikedGifs(likedGifs);
  };

  const handleUnlike = () => {
    setIsLiked(false);
    dispatchUnlikeGif(id);
    return setLikedGifs(likedGifs);
  };

  if (isLiked) {
    return (
      <div>
        <button onClick={handleUnlike} type="button">
          Unlike
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLike} type="button">
        Like
      </button>
    </div>
  );
};

LikeButton.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default LikeButton;

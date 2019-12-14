import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "rsuite";

import { dispatchLikeGif, dispatchUnlikeGif } from "../redux/dispatcher";
import { store } from "../redux/store";

const LikeButton = ({ url, id, weirdnessValue, setLikedGifs }) => {
  const [isLiked, setIsLiked] = useState(id in store.getState());

  const getLikedGifs = () =>
    Object.keys(store.getState()).map(id => {
      const { url, weirdnessValue } = store.getState()[id];
      return { id, weirdnessValue, url };
    });

  const handleLike = () => {
    setIsLiked(true);
    dispatchLikeGif(id, url, weirdnessValue);
    return setLikedGifs(getLikedGifs());
  };

  const handleUnlike = () => {
    setIsLiked(false);
    dispatchUnlikeGif(id);
    return setLikedGifs(getLikedGifs());
  };

  if (isLiked) {
    return (
      <Button color="red" onClick={handleUnlike} type="button">
        Unlike
      </Button>
    );
  }

  return (
    <Button color="green" onClick={handleLike} type="button">
      Like
    </Button>
  );
};

LikeButton.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default LikeButton;

import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "rsuite";

import { dispatchLikeGif, dispatchUnlikeGif } from "../redux/dispatcher";
import { store } from "../redux/store";

const LikeButton = ({
  url,
  id,
  weirdnessValue,
  title,
  searchTerm,
  setLikedGifs,
  setCanCalculate
}) => {
  const [isLiked, setIsLiked] = useState(id in store.getState());

  const getLikedGifs = () =>
    Object.keys(store.getState()).map(id => {
      const { url, weirdnessValue, title, searchTerm } = store.getState()[id];
      return { id, weirdnessValue, url, title, searchTerm };
    });

  const handleLike = () => {
    setIsLiked(true);
    dispatchLikeGif(id, url, weirdnessValue, title, searchTerm);
    setCanCalculate(Object.keys(getLikedGifs()).length === 5);
    return setLikedGifs(getLikedGifs());
  };

  const handleUnlike = () => {
    setIsLiked(false);
    dispatchUnlikeGif(id);
    setCanCalculate(Object.keys(getLikedGifs()).length === 5);
    return setLikedGifs(getLikedGifs());
  };

  if (isLiked) {
    return (
      <Button color="red" onClick={handleUnlike} type="button">
        <Icon icon="thumbs-down" /> Unlike
      </Button>
    );
  }

  if (Object.keys(getLikedGifs()).length >= 5) {
    return (
      <Button disabled type="button">
        Cannot Like More
      </Button>
    );
  }

  return (
    <Button color="green" onClick={handleLike} type="button">
      <Icon icon="thumbs-up" /> Like
    </Button>
  );
};

LikeButton.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default LikeButton;

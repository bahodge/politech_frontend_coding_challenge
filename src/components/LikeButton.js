import React, { useState } from "react";
import PropTypes from "prop-types";
import { dispatchLikeGif, dispatchUnlikeGif } from "../redux/dispatcher";

import { store } from "../redux/store";

const LikeButton = ({ url, id }) => {
  const [isLiked, setIsLiked] = useState(id in store.getState());

  const handleLike = () => {
    setIsLiked(true);
    return dispatchLikeGif(id, url);
  };

  const handleUnlike = () => {
    setIsLiked(false);
    return dispatchUnlikeGif(id);
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

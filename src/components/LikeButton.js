import React from "react";
import PropTypes from "prop-types";
import { dispatchLikeGif } from "../redux/dispatcher";

import { store } from "../redux/store";

const LikeButton = ({ imageUrl }) => {
  const handleClick = () => {
    console.log(store.getState());
    return dispatchLikeGif(imageUrl);
  };

  return (
    <div>
      <button onClick={handleClick}>Like Gif</button>
    </div>
  );
};

LikeButton.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default LikeButton;

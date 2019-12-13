import React from "react";
import PropTypes from "prop-types";
import { dispatchLikeGif } from "../redux/dispatcher";

import { store } from "../redux/store";

const LikeButton = ({ url, id }) => {
  const handleClick = () => {
    return dispatchLikeGif(id, url);
  };

  const isLiked = store.getState().filter(gif => gif.id === id).length > 0;
  console.log(isLiked);
  console.log(url);
  console.log(id);

  // if the gif is already liked
  // show the like button as disabled

  // if the gif is not already liked
  // show the like button as enabled

  return (
    <div>
      <button onClick={handleClick}>Like Gif</button>
    </div>
  );
};

// LikeButton.propTypes = {
//   url: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired
// };

export default LikeButton;

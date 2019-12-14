import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";

import { store } from "../redux/store";

const LikedGifs = ({ likedGifs }) => {
  return (
    <div>
      {likedGifs.map(({ url, id, weirdnessValue }, idx) => (
        <LikedGif key={idx} url={url} id={id} weirdnessValue={weirdnessValue} />
      ))}
    </div>
  );
};

// props passed?
LikedGifs.propTypes = {};

export default LikedGifs;

import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";

import { store } from "../redux/store";

const LikedGifs = ({ likedGifs }) => {
  // const allLikedGifs = () => {
  //   const currentState = store.getState();

  //   return Object.keys(currentState).map(id => {
  //     const { url, weirdnessValue } = currentState[id];
  //     return { id, weirdnessValue, url };
  //   });
  // };

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

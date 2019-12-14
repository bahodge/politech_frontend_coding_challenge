import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";

import { store } from "../redux/store";

const LikedGifs = () => {
  const allLikedGifs = () => {
    const currentState = store.getState();

    return Object.keys(currentState).map(id => {
      const { url, weirdnessValue } = currentState;
      return { id, weirdnessValue, url };
    });
  };

  return (
    <div>
      {allLikedGifs().map(({ url, id, weirdnessValue }, idx) => (
        <LikedGif key={idx} url={url} id={id} weirdnessValue={weirdnessValue} />
      ))}
    </div>
  );
};

LikedGifs.propTypes = {};

export default LikedGifs;

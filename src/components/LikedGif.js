import React from "react";
import PropTypes from "prop-types";

const LikedGif = ({ id, url, weirdnessValue }) => {
  return (
    <div>
      <img src={url} alt={id} />
      <p>Weirdness: {weirdnessValue}</p>
    </div>
  );
};

LikedGif.propTypes = {};

export default LikedGif;

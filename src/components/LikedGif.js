import React from "react";
import PropTypes from "prop-types";
// import { Button } from "rsuite";
// import { dispatchUnlikeGif } from "../redux/dispatcher";

// import { store } from "../redux/store";
// import LikeButton from "./LikeButton";

const LikedGif = ({ id, url, weirdnessValue, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img style={{ height: "100px" }} src={url} alt={id} />
      <p>Weirdness: {weirdnessValue}</p>
      {/* <LikeButton
        url={url}
        id={id}
        weirdnessValue={weirdnessValue}
        setLikedGifs={setLikedGifs}
      /> */}
    </div>
  );
};

LikedGif.propTypes = {};

export default LikedGif;

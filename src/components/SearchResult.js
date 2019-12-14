import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";

const SearchResult = ({ giphyResult, setLikedGifs }) => {
  const { url, id, weirdnessValue } = giphyResult;

  return (
    <div>
      <img
        style={{ height: "250px" }}
        type="gif"
        src={url}
        alt={"Giphy Result"}
      />
      <p>Weirdness: {weirdnessValue}</p>
      <LikeButton
        url={url}
        id={id}
        weirdnessValue={weirdnessValue}
        setLikedGifs={setLikedGifs}
      />
    </div>
  );
};

SearchResult.propTypes = {
  giphyResult: PropTypes.object.isRequired
};

export default SearchResult;

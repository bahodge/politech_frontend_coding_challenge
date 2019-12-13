import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";

const SearchResult = ({ giphyResult }) => {
  const { url, id } = giphyResult;
  return (
    <div>
      <img type="gif" src={url} alt={"Giphy Result"} />
      <LikeButton url={url} id={id} />
    </div>
  );
};

SearchResult.propTypes = {
  giphyResult: PropTypes.object.isRequired
};

export default SearchResult;

import React from "react";
import PropTypes from "prop-types";

const SearchResultError = ({ giphyResultError }) => {
  return <div>{giphyResultError}</div>;
};

SearchResultError.propTypes = {
  giphyResultError: PropTypes.string.isRequired
};

export default SearchResultError;

import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "rsuite";
const SearchResultError = ({ giphyResultError }) => {
  return (
    <Row style={{ marginTop: "1rem", textAlign: "left" }}>
      <Col style={{ color: "red", fontWeight: "bold" }}>
        <p>{giphyResultError}</p>
      </Col>
    </Row>
  );
};

SearchResultError.propTypes = {
  giphyResultError: PropTypes.string.isRequired
};

export default SearchResultError;

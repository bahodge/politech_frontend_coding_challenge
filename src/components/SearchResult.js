import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";
import { Row, Col } from "rsuite";

const SearchResult = ({ giphyResult, setLikedGifs, setCanCalculate }) => {
  const { url, id, weirdnessValue, title, searchTerm } = giphyResult;

  return (
    <Row style={{ textAlign: "center", marginTop: "1rem" }}>
      <Col>
        <img
          style={{ width: "250px" }}
          type="gif"
          src={url}
          alt={"Giphy Result"}
        />

        <Row style={{ marginTop: "1rem" }}>
          <Col>
            <LikeButton
              url={url}
              id={id}
              title={title}
              searchTerm={searchTerm}
              weirdnessValue={weirdnessValue}
              setLikedGifs={setLikedGifs}
              setCanCalculate={setCanCalculate}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

SearchResult.propTypes = {
  giphyResult: PropTypes.object.isRequired
};

export default SearchResult;

import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";
import { Row, Col } from "rsuite";

const SearchResult = ({ giphyResult, setLikedGifs }) => {
  const { url, id, weirdnessValue } = giphyResult;

  return (
    <>
      <Row>
        <Col>
          <img
            style={{ height: "150px" }}
            type="gif"
            src={url}
            alt={"Giphy Result"}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Weirdness: {weirdnessValue}</p>
        </Col>
        <Col>
          <LikeButton
            url={url}
            id={id}
            weirdnessValue={weirdnessValue}
            setLikedGifs={setLikedGifs}
          />
        </Col>
      </Row>
    </>
  );
};

SearchResult.propTypes = {
  giphyResult: PropTypes.object.isRequired
};

export default SearchResult;

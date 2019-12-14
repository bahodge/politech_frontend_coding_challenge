import React from "react";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";
import { Row, Col } from "rsuite";

const SearchResult = ({ giphyResult, setLikedGifs }) => {
  const { url, id, weirdnessValue } = giphyResult;

  return (
    <Row style={{ marginTop: "1rem" }}>
      <Col xs={24} sm={12} md={12} lg={12}>
        <Row>
          <Col xsOffset={6} mdOffset={6} lgOffset={6} xs={12} md={12} lg={12}>
            <img
              style={{ height: "150px", boxShadow: "3px 3px 1px 1px" }}
              type="gif"
              src={url}
              alt={"Giphy Result"}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col
            xsOffset={12}
            mdOffset={12}
            lgOffset={12}
            xs={12}
            md={12}
            lg={12}
          >
            <LikeButton
              url={url}
              id={id}
              weirdnessValue={weirdnessValue}
              setLikedGifs={setLikedGifs}
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

import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";
import { Col, Row } from "rsuite";

const LikedGifs = ({ likedGifs }) => {
  return (
    <>
      <Row>
        <Col>
          <h4>Liked GIFs</h4>
        </Col>
      </Row>
      <Row>
        {likedGifs.map(({ url, id, weirdnessValue, title }, idx) => (
          <Col key={idx} md={12} style={{ marginTop: "1rem" }}>
            <LikedGif
              url={url}
              id={id}
              weirdnessValue={weirdnessValue}
              title={title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

LikedGifs.propTypes = {
  likedGifs: PropTypes.array.isRequired
};

export default LikedGifs;

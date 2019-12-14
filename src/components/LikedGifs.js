import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";
import { Col, Row } from "rsuite";

const LikedGifs = ({ likedGifs }) => {
  return (
    <>
      <Row>
        {likedGifs.map(({ url, id, weirdnessValue }, idx) => (
          <Col key={idx} md={12} style={{ marginTop: "1rem" }}>
            <LikedGif url={url} id={id} weirdnessValue={weirdnessValue} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// props passed?
LikedGifs.propTypes = {
  likedGifs: PropTypes.array.isRequired
};

export default LikedGifs;

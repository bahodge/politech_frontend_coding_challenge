import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";
import { Col, Row, Button } from "rsuite";

const LikedGifs = ({ likedGifs, canCalculate }) => {
  return (
    <>
      <Row>
        <Col style={{ textAlign: "left" }}>
          <h4>Liked GIFs</h4>
        </Col>
      </Row>
      <Row>
        {likedGifs.map(({ url, id, weirdnessValue, title }, idx) => (
          <LikedGif
            key={idx}
            url={url}
            id={id}
            weirdnessValue={weirdnessValue}
            title={title}
          />
        ))}
      </Row>
      <Row>
        <Col>
          <Button>{canCalculate ? "Click Me" : "Need more likes"}</Button>
        </Col>
      </Row>
    </>
  );
};

LikedGifs.propTypes = {
  likedGifs: PropTypes.array.isRequired
};

export default LikedGifs;

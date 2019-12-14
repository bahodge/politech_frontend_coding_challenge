import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";

const LikedGif = ({ id, url, weirdnessValue, title }) => {
  return (
    <div>
      <Row style={{ marginTop: "0.5rem" }}>
        <Col>{title ? title : "Untitled"}</Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }}>
        <Col>
          <img style={{ maxHeight: "60px" }} src={url} alt={id} />
        </Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }}>
        <Col>Weirdness: {weirdnessValue}</Col>
      </Row>
    </div>
  );
};

LikedGif.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  weirdnessValue: PropTypes.number.isRequired,
  title: PropTypes.string
};

export default LikedGif;

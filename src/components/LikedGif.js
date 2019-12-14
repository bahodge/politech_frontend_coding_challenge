import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";

const LikedGif = ({ id, url, weirdnessValue, title }) => {
  return (
    <div style={{ display: "block" }}>
      <Row style={{ marginTop: "1rem" }}>
        <Col>{title ? title : "Untitled"}</Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }}>
        <Col>
          <img
            style={{ maxHeight: "60px", maxWidth: "100px" }}
            src={url}
            alt={id}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }}>
        <Col>{weirdnessValue} / 10</Col>
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

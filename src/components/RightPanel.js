import React from "react";
import PropTypes from "prop-types";
import LikedGifs from "./LikedGifs";
import { Col } from "rsuite";

const RightPanel = props => {
  const { likedGifs, canCalculate } = props;

  return (
    <Col smOffset={2} mdOffset={2} lgOffset={2} sm={10} md={10} lg={10}>
      <LikedGifs likedGifs={likedGifs} canCalculate={canCalculate} />
    </Col>
  );
};

RightPanel.propTypes = {
  likedGifs: PropTypes.array.isRequired,
  canCalculate: PropTypes.bool.isRequired
};

export default RightPanel;

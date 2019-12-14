import React from "react";
import PropTypes from "prop-types";
import LikedGifs from "./LikedGifs";
import { Col } from "rsuite";

const RightPanel = props => {
  const { likedGifs, setLikedGifs } = props;

  return (
    <Col smOffset={2} mdOffset={2} lgOffset={2} sm={10} md={10} lg={10}>
      <LikedGifs likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
    </Col>
  );
};

RightPanel.propTypes = {
  likedGifs: PropTypes.array.isRequired,
  setLikedGifs: PropTypes.func.isRequired
};

export default RightPanel;

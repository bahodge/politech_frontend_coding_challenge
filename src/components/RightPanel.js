import React from "react";
import PropTypes from "prop-types";
import LikedGifs from "./LikedGifs";
import { Col } from "rsuite";

const RightPanel = props => {
  const {
    likedGifs,
    canCalculate,
    setCalculated
    // setLikedGifs,
    // setCanCalculate
  } = props;

  return (
    <Col smOffset={2} mdOffset={2} lgOffset={2} sm={10} md={10} lg={10}>
      <LikedGifs
        likedGifs={likedGifs}
        canCalculate={canCalculate}
        setCalculated={setCalculated}
        // setLikedGifs={setLikedGifs}
        // setCanCalculate={setCanCalculate}
      />
    </Col>
  );
};

RightPanel.propTypes = {
  setCalculated: PropTypes.func.isRequired,
  likedGifs: PropTypes.array.isRequired,
  canCalculate: PropTypes.bool.isRequired
};

export default RightPanel;

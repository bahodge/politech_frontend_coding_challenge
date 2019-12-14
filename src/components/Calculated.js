import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";
import { Grid, Row, Col, Button } from "rsuite";

import { dispatchStartOver } from "../redux/dispatcher";

const Calculated = props => {
  const {
    likedGifs,
    setLikedGifs,
    setGiphyResult,
    setGiphyResultError,
    setCanCalculate,
    setCalculated
  } = props;

  const handleStartOver = () => {
    console.log("STARTING OVER!");
    // Nukes the store

    setLikedGifs([]);
    setGiphyResult(null);
    setGiphyResultError(null);
    setCanCalculate(false);
    dispatchStartOver();
    return setCalculated(false);

    // Nukes the state for all global
  };

  const calculatedWeirdnessValue = () => {
    // Protecting strange edge case
    if (likedGifs.length === 0) return 0;

    const sum = likedGifs.reduce((acc, gif) => acc + gif.weirdnessValue, 0);
    const average = sum / likedGifs.length;
    return Math.floor(average);
  };

  const buildLikedGifs = () => {
    return likedGifs.map(({ url, id, weirdnessValue, title }, idx) => (
      <Col key={idx} sm={4} md={4} lg={4}>
        <LikedGif
          key={idx}
          url={url}
          id={id}
          weirdnessValue={weirdnessValue}
          title={title}
        />
      </Col>
    ));
  };

  return (
    <Grid>
      <Row>
        <Col>
          <h5>
            You scored an {calculatedWeirdnessValue()} out of 10 on the
            weirdness scale!
          </h5>
        </Col>
      </Row>

      <Row style={{ marginTop: "3rem" }}>
        <Col style={{ textAlign: "left" }}>
          <h5>The Gifs you liked</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col xs={2}> </Col> {/* this is strange because its just for offset */}
        {buildLikedGifs()}
      </Row>
      <Row>
        <Col>
          <Button onClick={handleStartOver}>Start Over</Button>
        </Col>
      </Row>
    </Grid>
  );
};

Calculated.propTypes = {};

export default Calculated;

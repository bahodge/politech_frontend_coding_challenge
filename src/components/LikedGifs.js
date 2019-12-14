import React from "react";
import PropTypes from "prop-types";
import LikedGif from "./LikedGif";
import { Col, Row, Button } from "rsuite";

const LikedGifs = ({ likedGifs, canCalculate, setCalculated }) => {
  const remainingLikes = () => 5 - likedGifs.length;

  // Calculate gifs
  const handleCalculate = () => {
    console.log("calculating");
    return setCalculated(true);
  };
  //

  return (
    <>
      <Row>
        <Col style={{ textAlign: "left" }}>
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
      {canCalculate ? (
        <Row style={{ marginTop: "1rem" }}>
          <Col>
            <Button onClick={handleCalculate} color="blue">
              Calculate My Weirdness Score
            </Button>
          </Col>
        </Row>
      ) : (
        <Row style={{ marginTop: "1rem" }}>
          <Col>
            <Button
              onClick={handleCalculate} //disabled
            >
              Calculate My Weirdness Score
            </Button>
          </Col>
        </Row>
      )}
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          You must <em>Like</em> {remainingLikes()} more GIFs to calculate your
          score
        </Col>
      </Row>
    </>
  );
};

LikedGifs.propTypes = {
  likedGifs: PropTypes.array.isRequired
};

export default LikedGifs;

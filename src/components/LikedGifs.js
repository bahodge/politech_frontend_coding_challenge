import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "rsuite";

import LikedGifsRow from "./LikedGifsRow";

const LikedGifs = ({ likedGifs, canCalculate, setCalculated }) => {
  const remainingLikes = () => 5 - likedGifs.length;

  const handleCalculate = () => {
    return setCalculated(true);
  };

  const pairedUpLikedGifs = () => {
    let newLikedGifs = {
      firstRow: [],
      secondRow: [],
      lastRow: []
    };

    // I don't like this solution but it works :(
    // Thanks JS for not giving me array index out of bounds! #goodguyjs

    if (likedGifs[0]) newLikedGifs.firstRow.push(likedGifs[0]);
    if (likedGifs[1]) newLikedGifs.firstRow.push(likedGifs[1]);
    if (likedGifs[2]) newLikedGifs.secondRow.push(likedGifs[2]);
    if (likedGifs[3]) newLikedGifs.secondRow.push(likedGifs[3]);
    if (likedGifs[4]) newLikedGifs.lastRow.push(likedGifs[4]);

    return newLikedGifs;
  };

  return (
    <>
      <Row>
        <Col style={{ textAlign: "left" }}>
          <h4>Liked GIFs</h4>
        </Col>
      </Row>
      <LikedGifsRow pairedLikedGifs={pairedUpLikedGifs().firstRow} />
      <LikedGifsRow pairedLikedGifs={pairedUpLikedGifs().secondRow} />
      <LikedGifsRow
        pairedLikedGifs={pairedUpLikedGifs().lastRow}
        colWidth={24}
      />

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
            <Button onClick={handleCalculate} disabled>
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

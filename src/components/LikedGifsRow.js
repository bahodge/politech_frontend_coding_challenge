import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";

import LikedGif from "./LikedGif";

const LikedGifsRow = ({
  pairedLikedGifs,
  colWidth = 12,
  setLikedGifs,
  setCanCalculate
}) => {
  return (
    <Row style={{ marginTop: "1rem" }}>
      {pairedLikedGifs.map(({ url, id, weirdnessValue, title }, idx) => (
        <Col key={idx} md={colWidth} style={{ marginTop: "1rem" }}>
          <LikedGif
            canUnlikeGif={true}
            setLikedGifs={setLikedGifs}
            setCanCalculate={setCanCalculate}
            url={url}
            id={id}
            weirdnessValue={weirdnessValue}
            title={title}
          />
        </Col>
      ))}
    </Row>
  );
};

LikedGifsRow.propTypes = {
  pairedLikedGifs: PropTypes.array.isRequired,
  colWidth: PropTypes.number
};

export default LikedGifsRow;

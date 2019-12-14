import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";
import { dispatchUnlikeGif } from "../redux/dispatcher";
import { store } from "../redux/store";
const LikedGif = ({
  id,
  url,
  weirdnessValue,
  title,
  canUnlikeGif = false,
  setLikedGifs,
  setCanCalculate
}) => {
  // Should handle unliking a picture

  const getLikedGifs = () =>
    Object.keys(store.getState()).map(id => {
      const { url, weirdnessValue, title, searchTerm } = store.getState()[id];
      return { id, weirdnessValue, url, title, searchTerm };
    });

  const handleUnlikeGif = () => {
    if (!canUnlikeGif) return null;

    dispatchUnlikeGif(id);
    setCanCalculate(Object.keys(getLikedGifs()).length === 5);
    return setLikedGifs(getLikedGifs());
  };

  return (
    <div onClick={handleUnlikeGif} style={{ display: "block" }}>
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

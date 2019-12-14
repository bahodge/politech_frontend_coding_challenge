import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";
import SearchForm from "./SearchForm";
import SearchResultError from "./SearchResultError";
import SearchResult from "./SearchResult";

import ApplicationInstructions from "./ApplicationInstructions";

const LeftPanel = props => {
  const {
    setGiphyResult,
    setGiphyResultError,
    giphyResultError,
    giphyResult,
    setLikedGifs
  } = props;

  return (
    <Col xs={12} sm={12} md={12} lg={12}>
      <Row style={{ textAlign: "left" }}>
        <Col>
          <ApplicationInstructions />
        </Col>
      </Row>
      <Row style={{ marginTop: "3rem", textAlign: "left" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <SearchForm
            setGiphyResult={setGiphyResult}
            setGiphyResultError={setGiphyResultError}
          />

          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              {giphyResultError && (
                <SearchResultError giphyResultError={giphyResultError} />
              )}
            </Col>
          </Row>

          {giphyResult && (
            <SearchResult
              giphyResult={giphyResult}
              setLikedGifs={setLikedGifs}
            />
          )}
        </Col>
      </Row>
    </Col>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;

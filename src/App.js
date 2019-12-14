import React, { useState } from "react";
import "./App.css";

import { Container, Header, Content, Footer, Grid, Row, Col } from "rsuite";

import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import LikedGifs from "./components/LikedGifs";
import SearchResultError from "./components/SearchResultError";

function App() {
  const [giphyResult, setGiphyResult] = useState();
  const [giphyResultError, setGiphyResultError] = useState();
  const [likedGifs, setLikedGifs] = useState([]);

  return (
    <Container
      style={{ height: "100vh", backgroundColor: "#f2f2f2" }}
      className="App"
    >
      <Header>
        <Grid style={{ maxWidth: "850px" }}>
          <Row style={{ textAlign: "left" }}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <h3>Weirdness Calculator</h3>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Content>
        <Grid style={{ maxWidth: "850px" }}>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Row style={{ textAlign: "left" }}>
                <Col>
                  <SearchForm
                    setGiphyResult={setGiphyResult}
                    setGiphyResultError={setGiphyResultError}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={12} md={12} lg={12}>
                  {giphyResultError && (
                    <SearchResultError giphyResultError={giphyResultError} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={12} md={12} lg={12}>
                  {giphyResult && (
                    <SearchResult
                      giphyResult={giphyResult}
                      setLikedGifs={setLikedGifs}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col xsOffset={2} xs={22} sm={10} md={10} lg={10}>
              <LikedGifs likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

import { Container, Header, Content, Footer, Grid, Row, Col } from "rsuite";

import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import LikedGifs from "./components/LikedGifs";

function App() {
  const [giphyResult, setGiphyResult] = useState();
  const [likedGifs, setLikedGifs] = useState([]);

  return (
    <Container className="App">
      <Header>This is the header</Header>
      <Content>
        <Grid>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Row>
                <Col>
                  <SearchForm setGiphyResult={setGiphyResult} />
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

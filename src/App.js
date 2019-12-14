import React, { useState } from "react";
import "./App.css";

import { Container, Header, Content, Footer, Grid, Row, Col } from "rsuite";

import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import LikedGifs from "./components/LikedGifs";
import SearchResultError from "./components/SearchResultError";
import ApplicationInstructions from "./components/ApplicationInstructions";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const [giphyResult, setGiphyResult] = useState();
  const [giphyResultError, setGiphyResultError] = useState();
  const [likedGifs, setLikedGifs] = useState([]);

  return (
    <Container style={{ height: "100vh" }} className="App">
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
          <LeftPanel
            setGiphyResult={setGiphyResult}
            setGiphyResultError={setGiphyResultError}
            giphyResultError={giphyResultError}
            giphyResult={giphyResult}
            setLikedGifs={setLikedGifs}
          />
          <RightPanel likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
        </Grid>
      </Content>
    </Container>
  );
}

export default App;

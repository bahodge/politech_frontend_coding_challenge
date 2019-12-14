import React, { useState } from "react";
import "./App.css";

import { Container, Header, Content, Grid, Row, Col } from "rsuite";

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const [giphyResult, setGiphyResult] = useState();
  const [giphyResultError, setGiphyResultError] = useState();
  const [likedGifs, setLikedGifs] = useState([]);
  const [canCalculate, setCanCalculate] = useState(false);

  // console.log("Is Calculating", isCalculating);

  return (
    <Container style={{ height: "100vh" }} className="App">
      <Header style={{ marginBottom: "3rem" }}>
        <Grid style={{ maxWidth: "1000px" }}>
          <Row style={{ textAlign: "left" }}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <h3>Weirdness Calculator</h3>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Content>
        <Grid style={{ maxWidth: "1000px" }}>
          <LeftPanel
            setGiphyResult={setGiphyResult}
            setGiphyResultError={setGiphyResultError}
            giphyResultError={giphyResultError}
            giphyResult={giphyResult}
            setLikedGifs={setLikedGifs}
            setCanCalculate={setCanCalculate}
          />
          <RightPanel likedGifs={likedGifs} canCalculate={canCalculate} />
        </Grid>
      </Content>
    </Container>
  );
}

export default App;

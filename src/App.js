import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const { currentGifUrl, setCurrentGifUrl } = useState(null);

  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  const endpoint = process.env.REACT_APP_GIPHY_BASE_ENDPOINT;
  const giphyUrl = `${endpoint}/random?api_key=${apiKey}`;

  return (
    <div className="App">
      <div>
        <img src={currentGifUrl} alt="random" />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import fetch from "node-fetch";
import LikeButton from "./components/LikeButton";

function App() {
  const [currentGifUrl, setCurrentGifUrl] = useState(null);
  const [requestErrors, setRequestErrors] = useState(null);

  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  const endpoint = process.env.REACT_APP_GIPHY_BASE_ENDPOINT;
  const giphyUrl = `${endpoint}/random?api_key=${apiKey}`;

  const fetchRandomGif = async () => {
    return await fetch(giphyUrl, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        setCurrentGifUrl(json.data.image_url);
      })
      .catch(error => setRequestErrors(error));
  };

  return (
    <div className="App">
      <div>
        {requestErrors && <div>{requestErrors.message}</div>}
        <button onClick={fetchRandomGif}>Click</button>
        {currentGifUrl && <img type="gif" src={currentGifUrl} alt="random" />}
        {currentGifUrl && <LikeButton imageUrl={currentGifUrl} />}
      </div>
    </div>
  );
}

export default App;

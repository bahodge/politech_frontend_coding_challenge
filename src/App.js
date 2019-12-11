import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import fetch from "node-fetch";

function App() {
  const [currentGifUrl, setCurrentGifUrl] = useState(null);

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
        console.log(json.data);
        // setCurrentGifUrl(json.data.url);
      });
  };

  const ind = `${endpoint}/A85KWwZvqqvq8?api_key=${apiKey}`;

  // fetchRandom();

  // ("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
  console.log(ind);
  return (
    <div className="App">
      <div>
        <button onClick={fetchRandomGif}>Click</button>
        {console.log(currentGifUrl)}
        <img type="gif" src={ind} alt="random" />
      </div>
    </div>
  );
}

export default App;

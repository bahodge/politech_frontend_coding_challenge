import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import LikedGifs from "./components/LikedGifs";

function App() {
  const [giphyResult, setGiphyResult] = useState();
  const [likedGifs, setLikedGifs] = useState([]);

  return (
    <div className="App">
      <div>
        <LikedGifs likedGifs={likedGifs} />
        <SearchForm setGiphyResult={setGiphyResult} />

        {giphyResult && (
          <SearchResult giphyResult={giphyResult} setLikedGifs={setLikedGifs} />
        )}
      </div>
    </div>
  );
}

export default App;

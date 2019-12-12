import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import fetch from "node-fetch";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div>
        <SearchForm />
        {/* {requestErrors && <div>{requestErrors.message}</div>}
        <button onClick={fetchRandomGif}>Click</button> */}
        {/* {currentGifUrl && <img type="gif" src={currentGifUrl} alt="random" />}
        {currentGifUrl && <LikeButton imageUrl={currentGifUrl} />} */}
      </div>
    </div>
  );
}

export default App;

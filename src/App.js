import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchResult, setSearchResult] = useState();

  return (
    <div className="App">
      <div>
        <SearchForm setSearchResult={setSearchResult} />
        {/* {requestErrors && <div>{requestErrors.message}</div>}
        <button onClick={fetchRandomGif}>Click</button> */}
        {searchResult && <img type="gif" src={searchResult.url} alt="random" />}
        {/* {currentGifUrl && <LikeButton imageUrl={currentGifUrl} />} */}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

function App() {
  const [giphyResult, setGiphyResult] = useState();

  return (
    <div className="App">
      <div>
        <SearchForm setGiphyResult={setGiphyResult} />

        {giphyResult && <SearchResult giphyResult={giphyResult} />}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchResult, setSearchResult] = useState();

  return (
    <div className="App">
      <div>
        <SearchForm setSearchResult={setSearchResult} />
        {searchResult && <img type="gif" src={searchResult.url} alt="random" />}
      </div>
    </div>
  );
}

export default App;

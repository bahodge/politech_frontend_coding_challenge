import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeSearchRequest } from "../services/request_service";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    // TODO - Sanitize Search Term

    return await makeSearchRequest(searchTerm);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search</label>
      <input name="searchTerm" type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

// SearchForm.propTypes = {
//   imageUrl: PropTypes.string.isRequired
// };

export default SearchForm;

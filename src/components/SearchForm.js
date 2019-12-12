import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeTranslateRequest } from "../services/request_service";

const SearchForm = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    // TODO - Sanitize Search Term
    const result = await makeTranslateRequest(searchTerm);
    const {
      images: {
        downsized: { url }
      },
      id
    } = result;

    return setSearchResult({ url, id });
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

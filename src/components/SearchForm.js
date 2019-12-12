import React, { useState } from "react";
// import PropTypes from "prop-types";
import { makeTranslateRequest } from "../services/request_service";
import { sanitizeString } from "../helpers/FormSanitizer";
const SearchForm = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    // Makes params into an object
    const params = { searchTerm };
    const sanitizedValues = sanitizeString(params, "searchTerm");

    console.log(params);
    console.log(sanitizedValues);

    // TODO - Sanitize Search Term
    // const result = await makeTranslateRequest(sanitizedValues.searchTerm);
    // I'm not sure how reliable the result will be

    // const {
    //   images: {
    //     downsized: { url }
    //   },
    //   id
    // } = result;

    // return setSearchResult({ url, id });
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

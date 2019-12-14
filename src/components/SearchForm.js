import React, { useState } from "react";
// import PropTypes from "prop-types";
import { makeTranslateRequest } from "../services/request_service";
import { sanitizeString, sanitizeInteger } from "../helpers/FormSanitizer";

import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";

const SearchForm = ({ setGiphyResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weirdnessValue, setWeirdnessValue] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    setGiphyResult(null); // I needed to reset the giphy to nuke the search result so it redraws.

    const params = { searchTerm, weirdnessValue };
    let sanitizedValues = sanitizeString(params, "searchTerm");
    sanitizedValues = sanitizeInteger(sanitizedValues, "weirdnessValue");

    const result = await makeTranslateRequest(sanitizedValues);

    console.log(result);
    const {
      images: {
        downsized: { url }
      },
      id
    } = result;

    return setGiphyResult({ url, id, weirdnessValue });
  };

  const updateSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  const updateWeirdnessValue = value => {
    setWeirdnessValue(value);
  };

  const buildSliderMarks = () => {
    let marks = {};
    [...Array(11).keys()].map(num => {
      marks[num] = num;
      return num;
    });

    return marks;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search</label>
      <input name="searchTerm" type="text" onChange={updateSearchTerm} />
      <Slider
        min={0}
        max={10}
        onChange={value => updateWeirdnessValue(value)}
        marks={buildSliderMarks()}
        step={1}
        dots={true}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// SearchForm.propTypes = {
//   imageUrl: PropTypes.string.isRequired
// };

export default SearchForm;

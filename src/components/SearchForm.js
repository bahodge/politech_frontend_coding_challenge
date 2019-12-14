import React, { useState } from "react";
// import PropTypes from "prop-types";

import {
  Slider,
  Form,
  FormGroup,
  ControlLabel,
  Input,
  InputGroup,
  Icon
} from "rsuite";

import { makeTranslateRequest } from "../services/request_service";
import { sanitizeString, sanitizeInteger } from "../helpers/FormSanitizer";

// import Slider from "rc-slider/lib/Slider";

const SearchForm = ({ setGiphyResult, setGiphyResultError }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weirdnessValue, setWeirdnessValue] = useState(5);

  const handleSubmit = async e => {
    e.preventDefault();
    setGiphyResult(null); // I needed to reset the giphy to nuke the search result so it redraws.

    const params = { searchTerm, weirdnessValue };
    let sanitizedValues = sanitizeString(params, "searchTerm");
    sanitizedValues = sanitizeInteger(sanitizedValues, "weirdnessValue");

    const result = await makeTranslateRequest(sanitizedValues);

    console.log(result);

    const { images, id } = result;

    if (images) {
      const {
        downsized: { url }
      } = images;

      setGiphyResultError(null);
      return setGiphyResult({ url, id, weirdnessValue });
    } else {
      setGiphyResult(null);
      return setGiphyResultError("No Results");
    }
  };

  const updateSearchTerm = newValue => {
    setSearchTerm(newValue);
  };

  const updateWeirdnessValue = newValue => {
    setWeirdnessValue(newValue);
  };
  //updateSearchTerm
  return (
    <Form>
      <FormGroup>
        <ControlLabel style={{ fontWeight: "bold" }}>Search Term</ControlLabel>
        <InputGroup inside>
          <Input
            name="searchTerm"
            type="text"
            value={searchTerm}
            placeholder="Search Term"
            onChange={value => updateSearchTerm(value)}
          />
          <InputGroup.Button type="submit" color="blue" onClick={handleSubmit}>
            <Icon icon="check" /> Submit
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Slider
          defaultValue={5}
          min={0}
          step={1}
          max={10}
          graduated
          progress
          onChange={value => updateWeirdnessValue(value)}
          renderMark={mark => {
            return mark;
          }}
        />
      </FormGroup>
    </Form>
  );
};

// SearchForm.propTypes = {
//   imageUrl: PropTypes.string.isRequired
// };

export default SearchForm;

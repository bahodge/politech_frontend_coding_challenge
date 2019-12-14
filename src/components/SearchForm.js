import React, { useState } from "react";
// import PropTypes from "prop-types";

import {
  Button,
  Row,
  Col,
  Slider,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Input,
  InputGroup,
  Icon
} from "rsuite";

import { makeTranslateRequest } from "../services/request_service";
import { sanitizeString, sanitizeInteger } from "../helpers/FormSanitizer";

// import Slider from "rc-slider/lib/Slider";

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

  const updateSearchTerm = newValue => {
    setSearchTerm(newValue);
  };

  const updateWeirdnessValue = newValue => {
    setWeirdnessValue(newValue);
  };
  //updateSearchTerm
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <ControlLabel>Search Term</ControlLabel>
        <InputGroup inside>
          <Input
            name="searchTerm"
            type="text"
            value={searchTerm}
            placeholder="Search Term"
            onChange={value => updateSearchTerm(value)}
          />
          <InputGroup.Button
            color="blue"
            // onClick={e => console.log(e.target.submit())}
            type="submit"
          >
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

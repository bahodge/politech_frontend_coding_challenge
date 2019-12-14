import React, { useState } from "react";
import PropTypes from "prop-types";
import { store } from "../redux/store";

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

const SearchForm = ({ setGiphyResult, setGiphyResultError }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weirdnessValue, setWeirdnessValue] = useState(5);

  const validSearchTerm = searchTerm => {
    // get redux state
    const currentState = store.getState();

    const results = Object.keys(currentState).filter(id => {
      return (
        currentState[id].searchTerm.toLowerCase() === searchTerm.toLowerCase()
      );
    });

    // found a match and you cant do it, set errors and clear the searched one

    if (results.length > 0) {
      setGiphyResult(null);
      setGiphyResultError(`${searchTerm} is already used`);
      return false;
    }

    return true;
    console.log(results);
    // look at all the things and see if searchTerm has been used
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setGiphyResult(null); // I needed to reset the giphy to nuke the search result so it redraws.

    const params = { searchTerm, weirdnessValue };
    let sanitizedValues = sanitizeString(params, "searchTerm");
    sanitizedValues = sanitizeInteger(sanitizedValues, "weirdnessValue");

    // THere should be some validation here to prevent the search term being liked twice

    ///////////////////// BEFORE REQUEST ///////////////////
    if (!validSearchTerm(sanitizedValues.searchTerm)) return;

    const result = await makeTranslateRequest(sanitizedValues);

    // console.log(result);

    const { images, id, title } = result;

    if (images) {
      const {
        downsized: { url }
      } = images;

      setGiphyResultError(null);
      return setGiphyResult({
        url,
        id,
        weirdnessValue,
        title,
        searchTerm: sanitizedValues.searchTerm
      });
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

SearchForm.propTypes = {
  setGiphyResult: PropTypes.func.isRequired,
  setGiphyResultError: PropTypes.func.isRequired
};

export default SearchForm;

import fetch from "node-fetch";

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json"
};

const baseEndpoint = process.env.REACT_APP_GIPHY_BASE_ENDPOINT;
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

const makeSearchRequest = async (searchKeyword = "") => {
  const requestUrl = `${baseEndpoint}/search?api_key=${apiKey}&q=${searchKeyword}&limit=5`;
  const requestHeaders = {
    headers: headers,
    method: "GET",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => res.json())
    .then(json => json.data);
};

const makeTranslateRequest = async (searchKeyword = "", weirdnessScale = 0) => {
  const requestUrl = `${baseEndpoint}/translate?api_key=${apiKey}&s=${searchKeyword}&weirdness=${weirdnessScale}&limit=5`;
  const requestHeaders = {
    headers: headers,
    method: "GET",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => res.json())
    .then(json => json.data);
};

export { makeSearchRequest, makeTranslateRequest };

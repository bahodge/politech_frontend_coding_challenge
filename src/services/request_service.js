import fetch from "node-fetch";

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json"
};

const baseEndpoint = process.env.REACT_APP_GIPHY_BASE_ENDPOINT;
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

// const makeSearchRequest = async (searchTerm = "") => {
//   const requestUrl = `${baseEndpoint}/search?api_key=${apiKey}&q=${searchTerm}&limit=5`;
//   const requestHeaders = {
//     headers: headers,
//     method: "GET",
//     credentials: "same-origin"
//   };

//   return await fetch(requestUrl, requestHeaders)
//     .then(res => res.json())
//     .then(json => json.data);
// };

const makeTranslateRequest = async ({ searchTerm, weirdnessValue }) => {
  const requestUrl = `${baseEndpoint}/translate?api_key=${apiKey}&s=${searchTerm}&weirdness=${weirdnessValue}`;
  const requestHeaders = {
    headers: headers,
    method: "GET",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => res.json())
    .then(json => json.data)
    .catch(error => error);
};

export {
  //  makeSearchRequest,
  makeTranslateRequest
};

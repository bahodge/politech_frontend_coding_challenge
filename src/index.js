import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "rsuite/lib/styles/index.less"; // or 'rsuite/dist/styles/rsuite-default.css'
import "rsuite/dist/styles/rsuite-default.css";
import "rc-slider/assets/index.css";
import { store } from "./redux/store";

store.subscribe(() => console.log("Redux Store", store.getState()));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

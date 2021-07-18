import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { PeopleContext, peopleStore } from "./store/PeopleStore";

ReactDOM.render(
  <React.StrictMode>
    <PeopleContext.Provider value={peopleStore}>
      <App />
    </PeopleContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import ReactDOM from "react-dom";
import "./main.css";
import App from "./components/App.jsx";
import React from "react";

import reloadMagic from "./reload-magic-client.js"; // automatic reload
reloadMagic(); // automatic reload

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

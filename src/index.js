import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import * as Calc from "./components/calculator.js";
console.log(Calc);
ReactDOM.render(
  <div>
    <App />

    <ul>
      <li>{Calc.default(2, 4)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

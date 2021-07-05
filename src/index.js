import React from "react";
import ReactDOM from "react-dom";
const fName = "Mnevis";
const lName = "WebDev";
var lnum = Math.round(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName}, {lName}!
    </h1>
    <p>your lucky number is {lnum} </p>
  </div>,
  document.getElementById("root")
);

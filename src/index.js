import React from "react";
import ReactDOM from "react-dom";
const name = "Mnevis";
var lnum = Math.round(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>your lucky number is {lnum} </p>
  </div>,
  document.getElementById("root")
);

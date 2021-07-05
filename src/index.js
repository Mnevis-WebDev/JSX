import React from "react";
import ReactDOM from "react-dom";
const fName = "Mnevis";
const lName = "WebDev";
var lnum = Math.round(Math.random() * 100);

//CSS inline
const customStyle = {
  color: "blue",
  border: "solid",
  fontSize: "30px"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>
      Hello {fName}, {lName}!
    </h1>
    <p>your lucky number is {lnum} </p>
    <h1 style={{ fontSize: "10px" }}>This is another test</h1>
  </div>,
  document.getElementById("root")
);

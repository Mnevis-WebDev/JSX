import React from "react";
import ReactDOM from "react-dom";
const fName = "Mnevis";
const lName = "WebDev";
var lnum = Math.round(Math.random() * 100);

const date = new Date(2021, 1, 1, 16);

//CSS inline
const customStyle = {
  color: "blue",
  border: "solid",
  fontSize: "30px"
};
//CSS for the condition
const customStyle2 = {
  color: "blue"
};

function whatToSay() {
  var answer = "bonjour";
  if (date.getHours() <= 12) {
    answer = "Good morning";
    customStyle2.color = "red";
  }
  if (date.getHours() > 12 && date.getHours() <= 18) {
    answer = "Good afternoon";
    customStyle2.color = "green";
  }

  if (date.getHours() > 18) {
    answer = "Good evening";
    customStyle2.color = "blue";
  }
  return answer;
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>
      Hello {fName}, {lName}!
    </h1>
    <p>this is my console {date.getHours()} </p>
    <p>your lucky number is {lnum} </p>
    <h1 style={{ fontSize: "10px" }}>This is another test</h1>
    <h1 style={customStyle2}> {whatToSay()} </h1>
  </div>,
  document.getElementById("root")
);

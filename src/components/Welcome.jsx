import React from "react";

const fName = "Mnevis";
const lName = "WebDev";

//CSS inline
const customStyle = {
  color: "blue",
  border: "solid",
  fontSize: "30px"
};

function Welcome() {
  return (
    <h1 style={customStyle}>
      Hello {fName}, {lName}!
    </h1>
  );
}

export default Welcome;
